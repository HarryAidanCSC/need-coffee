import { useEffect, useState } from "react";
import './LatestPosts.css'
import { Link } from 'react-router-dom'

const LatestPosts = () => {
    const [latestPostData, setLatestPostData] = useState([]);
    
    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}Articles/all_articles.json`)
            .then(res => res.json())
            .then(setLatestPostData);
    }, []);

    const truncate = (str, maxLength = 80) =>
        str && str.length > maxLength ? str.slice(0, maxLength - 3) + "..." : str;

    const PostCard = ({ id, title, img, alt, date, text, type }) => {
        const dateObj = new Date(date);
        const formatted = dateObj.toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const imgSrc = `${import.meta.env.BASE_URL}${img}`;

        return (
            <Link to={`/article/${id}`} className='article-preview-card'>
                <div className="article-preview-image">
                    <img src={imgSrc} alt={alt} />
                    <span className="article-preview-type">{type?.toUpperCase()}</span>
                </div>
                <div className="article-preview-content">
                    <span className="article-preview-date">{formatted}</span>
                    <h3 className="article-preview-title">{title}</h3>
                    <p className="article-preview-excerpt">{truncate(text, 100)}</p>
                    <span className="article-preview-read">Read Article &rarr;</span>
                </div>
            </Link>
        );
    }

    const getMostRecentPosts = (posts, count = 3) => {
        return [...posts]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, count);
    };

    return (
        <div className='latest-posts-grid'>
            {getMostRecentPosts(latestPostData, 3).map((post) => (
                <PostCard
                    key={post.uuid}
                    id={post.uuid}
                    title={post.quick_title || post.title}
                    img={post.jpgFileName}
                    alt={post.alt}
                    date={post.date}
                    text={post.text || post.markdownText}
                    type={post.type}
                />
            ))}
        </div>
    );
};

export default LatestPosts;