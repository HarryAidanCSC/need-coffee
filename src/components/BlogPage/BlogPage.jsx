import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './BlogPage.css'
import HeaderBoard from '../HeaderBoard'
import FooterBoard from '../FooterBoard'

const BlogPage = () => {
    const location = useLocation();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [starFilter, setStarFilter] = useState('all');
    const [sortBy, setSortBy] = useState('date');
    const [sortOrder, setSortOrder] = useState('desc');

    useEffect(() => {
        // Set initial filter from navigation state
        if (location.state?.initialFilter) {
            setFilter(location.state.initialFilter);
        }
    }, [location.state]);

    useEffect(() => {
        fetch('/Articles/all_articles.json')
            .then(res => res.json())
            .then(data => {
                setArticles(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading articles:', error);
                setLoading(false);
            });
    }, []);

    const getTypeColor = (type) => {
        switch (type?.toLowerCase()) {
            case 'beans':
                return '#f3392a';
            case 'coffee shop':
                return '#3498db';
            case 'brewing':
                return '#27ae60';
            default:
                return '#e74c3c';
        }
    };

    const filteredArticles = articles.filter(article => {
        // Type filter
        const typeMatch = filter === 'all' || article.type?.toLowerCase() === filter;
        
        // Star filter
        const starMatch = starFilter === 'all' || article.ranking >= parseFloat(starFilter);
        
        return typeMatch && starMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
        } else if (sortBy === 'rating') {
            return sortOrder === 'desc' ? b.ranking - a.ranking : a.ranking - b.ranking;
        }
        return 0;
    });

    if (loading) {
        return (
            <>
                <HeaderBoard />
                <main className="blog-page">
                    <div className="loading">Loading articles... ☕</div>
                </main>
                <FooterBoard />
            </>
        );
    }

    return (
        <>
            <HeaderBoard />
            <main className="blog-page">
                <h1 className="blog-title">All Coffee Articles</h1>
                
                <div className="filters-container">
                    <div className="filters-left">
                        {/* Filter Buttons */}
                        <div className="filter-section">
                            <button 
                                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                                onClick={() => setFilter('all')}
                            >
                                All Articles
                            </button>
                            <button 
                                className={`filter-btn ${filter === 'coffee shop' ? 'active' : ''}`}
                                onClick={() => setFilter('coffee shop')}
                                style={{ '--btn-color': '#3498db' }}
                            >
                                ☕ Coffee Shops
                            </button>
                            <button 
                                className={`filter-btn ${filter === 'beans' ? 'active' : ''}`}
                                onClick={() => setFilter('beans')}
                                style={{ '--btn-color': '#f3392a' }}
                            >
                                🫘 Beans
                            </button>
                            <button 
                                className={`filter-btn ${filter === 'brewing' ? 'active' : ''}`}
                                onClick={() => setFilter('brewing')}
                                style={{ '--btn-color': '#27ae60' }}
                            >
                                ⚗️ Brewing
                            </button>
                        </div>

                        {/* Star Rating Filter */}
                        <div className="star-filter-section">
                            <div className="star-filter-buttons">
                                <button 
                                    className={`star-filter-btn ${starFilter === 'all' ? 'active' : ''}`}
                                    onClick={() => setStarFilter('all')}
                                >
                                    All ⭐
                                </button>
                                <button 
                                    className={`star-filter-btn ${starFilter === '3' ? 'active' : ''}`}
                                    onClick={() => setStarFilter('3')}
                                >
                                    3+ ⭐⭐⭐
                                </button>
                                <button 
                                    className={`star-filter-btn ${starFilter === '4' ? 'active' : ''}`}
                                    onClick={() => setStarFilter('4')}
                                >
                                    4+ ⭐⭐⭐⭐
                                </button>
                                <button 
                                    className={`star-filter-btn ${starFilter === '5' ? 'active' : ''}`}
                                    onClick={() => setStarFilter('5')}
                                >
                                    Perfect 5 ⭐⭐⭐⭐⭐
                                </button>
                            </div>
                        </div>

                        {/* Sort Options */}
                        <div className="sort-section">
                            <span className="filter-label">Sort by:</span>
                            <div className="sort-buttons">
                                <button 
                                    className={`sort-btn ${sortBy === 'date' ? 'active' : ''}`}
                                    onClick={() => setSortBy('date')}
                                >
                                    📅 Date
                                </button>
                                <button 
                                    className={`sort-btn ${sortBy === 'rating' ? 'active' : ''}`}
                                    onClick={() => setSortBy('rating')}
                                >
                                    ⭐ Rating
                                </button>
                                <button 
                                    className={`sort-order-btn ${sortOrder === 'desc' ? 'active' : ''}`}
                                    onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                                    title={`Sort ${sortOrder === 'desc' ? 'Ascending' : 'Descending'}`}
                                >
                                    {sortOrder === 'desc' ? '↓' : '↑'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Results Counter - Now on the right */}
                    <div className="results-counter">
                        Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                        {filter !== 'all' && ` for "${filter}"`}
                        {starFilter !== 'all' && ` with ${starFilter}+ stars`}
                        <br />
                        <small>Sorted by {sortBy} ({sortOrder === 'desc' ? 'newest/highest first' : 'oldest/lowest first'})</small>
                    </div>
                </div>

                <div className="articles-grid">
                    {filteredArticles.map(article => (
                        <Link 
                            key={article.uuid} 
                            to={`/article/${article.uuid}`} 
                            className="article-card"
                        >
                            {article.jpgFileName && (
                                <img 
                                    src={`/${article.jpgFileName}`} 
                                    alt={article.alt} 
                                    className="article-card-image"
                                />
                            )}
                            <div className="article-card-content">
                                <span 
                                    className="article-card-type"
                                    style={{ backgroundColor: getTypeColor(article.type) }}
                                >
                                    {article.type?.toUpperCase()}
                                </span>
                                <h2 className="article-card-title">{article.title}</h2>
                                <p className="article-card-date">
                                    {new Date(article.date).toLocaleDateString('en-GB', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                                <div className="article-card-rating">
                                    ⭐ {article.ranking}/5
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredArticles.length === 0 && (
                    <div className="no-results">
                        No articles found for "{filter}" 😔
                    </div>
                )}
            </main>
            <FooterBoard />
        </>
    );
};

export default BlogPage;
