import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './ArticlePage.css'
import HeaderBoard from '../HeaderBoard'
import FooterBoard from '../FooterBoard'

const ArticlePage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch('/Articles/all_articles.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(article => article.uuid === id);
                setPost(found);
            });
    }, [id]);

    if (!post) {
        return (
            <>
                <HeaderBoard />
                <h1>Article Not Found</h1>
                <FooterBoard />
            </>
        );
    }

    function StarRating({ rating, outOf = 5 }) {
        const fullStar = "★";
        const emptyStar = "☆";
        const stars = [];
        for (let i = 1; i <= outOf; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(
                    <span key={i} style={{ color: "#f7b500", fontSize: "1.6rem", marginRight: "0.1rem" }}>
                        {fullStar}
                    </span>
                );
            } else {
                stars.push(
                    <span key={i} style={{ color: "#e0c9a6", fontSize: "1.6rem", marginRight: "0.1rem" }}>
                        {emptyStar}
                    </span>
                );
            }
        }
        return (
            <div className="article-rating">
                <span style={{ fontWeight: 600, color: "#a05a2c", marginRight: "0.7rem" }}>
                    {rating}/{outOf}
                </span>
                {stars}
            </div>
        );
    }

    const { title, alt, date, markdownText, jpgFileName, ranking, type, location } = post;
    const imgSrc = `/${jpgFileName}`;
    
    // Function to get type styling based on category
    const getTypeStyle = (type) => {
        const typeColor = type?.toLowerCase();
        switch (typeColor) {
            case 'beans':
                return { background: 'linear-gradient(90deg, #f3392a 60%, #c1440e 100%)' };
            case 'coffee shop':
                return { background: 'linear-gradient(90deg, #3498db 60%, #2980b9 100%)' };
            case 'brewing':
                return { background: 'linear-gradient(90deg, #27ae60 60%, #229954 100%)' };
            default:
                return { background: 'linear-gradient(90deg,rgb(225, 60, 231) 60%,rgb(224, 27, 168) 100%)' };
        }
    };

    return (
        <>
            <HeaderBoard />
            <main>
                <h1 className="article-title">{title}</h1>
                <div className="article-main-content">
                    <div className="article-left">
                        <div className="article-meta" style={{ display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                                <span className="article-type" style={getTypeStyle(type)}>{type?.toUpperCase()}</span>
                                <span className="article-date">
                                    {new Date(date).toLocaleDateString('en-GB', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                            <StarRating rating={ranking} />
                        </div>
                        {jpgFileName && (
                            <img src={imgSrc} alt={alt} className="article-image" />
                        )}
                        <span className="article-location">
                            <b>Location:</b> {location}
                        </span>
                    </div>
                    <div className="article-text">
                        <article>
                            {markdownText.split('\n').map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </article>
                    </div>
                </div>
            </main>
            <FooterBoard />
        </>
    );
}

export default ArticlePage