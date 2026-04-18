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
        if (location.state?.initialFilter) {
            setFilter(location.state.initialFilter);
        }
    }, [location.state]);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}Articles/all_articles.json`)
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

    const filteredArticles = articles.filter(article => {
        const typeMatch = filter === 'all' || article.type?.toLowerCase() === filter;
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

    const truncate = (str, maxLength = 80) =>
        str && str.length > maxLength ? str.slice(0, maxLength - 3) + "..." : str;

    if (loading) {
        return (
            <div className="page-wrapper">
                <HeaderBoard />
                <main className="blog-page">
                    <div className="loading-state">Loading the brew...</div>
                </main>
                <FooterBoard />
            </div>
        );
    }

    return (
        <div className="page-wrapper">
            <HeaderBoard />
            <main className="blog-page">
                <header className="blog-header">
                    <h1 className="blog-title">Journal</h1>
                    <p className="blog-subtitle">Dive into the world of specialty coffee.</p>
                </header>
                
                <section className="blog-controls">
                    <div className="control-group">
                        <span className="control-label">Category:</span>
                        <div className="filter-chips">
                            {['all', 'beans', 'brewing', 'coffee shop'].map(f => (
                                <button 
                                    key={f}
                                    className={`filter-chip ${filter === f ? 'active' : ''}`}
                                    onClick={() => setFilter(f)}
                                >
                                    {f === 'all' ? 'All' : f === 'coffee shop' ? 'Shops' : f.charAt(0).toUpperCase() + f.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="control-group">
                        <span className="control-label">Rating:</span>
                        <div className="filter-chips">
                            {[
                                { val: 'all', label: 'All Ratings' },
                                { val: '3', label: '3+ Stars' },
                                { val: '4', label: '4+ Stars' },
                                { val: '5', label: 'Perfect 5' }
                            ].map(star => (
                                <button 
                                    key={star.val}
                                    className={`filter-chip ${starFilter === star.val ? 'active' : ''}`}
                                    onClick={() => setStarFilter(star.val)}
                                >
                                    {star.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="control-group sort-group">
                        <div className="sort-controls">
                            <span className="control-label">Sort By:</span>
                            <button className="sort-text-btn" onClick={() => {
                                setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
                                setSortBy('date');
                            }}>
                                Date {sortBy === 'date' && (sortOrder === 'desc' ? '↓' : '↑')}
                            </button>
                            <span className="separator">/</span>
                            <button className="sort-text-btn" onClick={() => {
                                setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
                                setSortBy('rating');
                            }}>
                                Rating {sortBy === 'rating' && (sortOrder === 'desc' ? '↓' : '↑')}
                            </button>
                        </div>
                    </div>
                </section>

                <section className="blog-results">
                    {filteredArticles.length === 0 ? (
                        <div className="empty-state">
                            <p>No articles found for these filters. Try broadening your search.</p>
                        </div>
                    ) : (
                        <div className="latest-posts-grid">
                            {filteredArticles.map(article => (
                                <Link to={`/article/${article.uuid}`} key={article.uuid} className='article-preview-card'>
                                    <div className="article-preview-image">
                                        <img src={`${import.meta.env.BASE_URL}${article.jpgFileName}`} alt={article.alt} />
                                        <span className="article-preview-type">{article.type?.toUpperCase()}</span>
                                    </div>
                                    <div className="article-preview-content">
                                        <span className="article-preview-date">
                                            {new Date(article.date).toLocaleDateString('en-GB', {
                                                year: 'numeric', month: 'long', day: 'numeric'
                                            })}
                                        </span>
                                        <h3 className="article-preview-title">{article.title || article.quick_title}</h3>
                                        <p className="article-preview-excerpt">{truncate(article.text || article.markdownText, 100)}</p>
                                        <span className="article-preview-read">Read Article &rarr;</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </section>
            </main>
            <FooterBoard />
        </div>
    );
};

export default BlogPage;
