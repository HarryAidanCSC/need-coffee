import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './ArticlePage.css'
import HeaderBoard from '../HeaderBoard'
import FooterBoard from '../FooterBoard'

const ArticlePage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}Articles/all_articles.json`)
            .then(res => res.json())
            .then(data => {
                const found = data.find(article => article.uuid === id);
                setPost(found);
            });
    }, [id]);

    if (!post) {
        return (
            <div className="page-wrapper">
                <HeaderBoard />
                <main className="loading-state">Brewing article...</main>
                <FooterBoard />
            </div>
        );
    }

    const { title, alt, date, markdownText, jpgFileName, ranking, type, location } = post;
    const imgSrc = `${import.meta.env.BASE_URL}${jpgFileName}`;

    return (
        <div className="page-wrapper">
            <HeaderBoard />
            <main className="article-main">
                <article className="article-container">
                    <header className="article-header">
                        <span className="article-tag">{type?.toUpperCase()}</span>
                        <h1 className="article-title">{title}</h1>
                        <div className="article-meta">
                            <span className="article-date">
                                {new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                            <span className="article-bullet">&bull;</span>
                            <span className="article-rating">⭐ {ranking}/5</span>
                        </div>
                    </header>
                    
                    {jpgFileName && (
                        <div className="article-hero-image">
                            <img src={imgSrc} alt={alt} />
                        </div>
                    )}
                    
                    <div className="article-content-wrapper">
                        <aside className="article-sidebar">
                            <div className="sidebar-module">
                                <h3>Location</h3>
                                <p>{location}</p>
                            </div>
                            <div className="sidebar-module">
                                <h3>Rating</h3>
                                <p className="large-rating">{ranking} / 5</p>
                            </div>
                        </aside>

                        <div className="article-body">
                            {markdownText.split('\n').filter(line => line.trim() !== '').map((line, i) => {
                                if (line.startsWith('# ')) return <h1 key={i}>{line.replace('# ', '')}</h1>;
                                if (line.startsWith('## ')) return <h2 key={i}>{line.replace('## ', '')}</h2>;
                                if (line.startsWith('### ')) return <h3 key={i}>{line.replace('### ', '')}</h3>;
                                return <p key={i}>{line}</p>;
                            })}
                        </div>
                    </div>
                </article>
            </main>
            <FooterBoard />
        </div>
    );
}

export default ArticlePage;