import { useEffect, useState } from "react";
import './LatestPosts.css'
import { Link } from 'react-router-dom'

const LatestPosts = () => {
    const [latestPostData, setLatestPostData] = useState([]);    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}Articles/all_articles.json`)
            .then(res => res.json())
            .then(setLatestPostData);
    }, []);

    const capitalise = str => str.charAt(0).toUpperCase() + str.slice(1);

    const truncate = (str, maxLength = 24) =>
        str.length > maxLength ? str.slice(0, maxLength - 3) + "..." : str;

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

    const PostButton = ({ id, title, img, alt, date, text, ranking, type }) => {
        const dateObj = new Date(date);
        const formatted = dateObj.toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });

        let rankingBg, rankingColor;
        if (ranking >= 4.5) {
            rankingBg = "linear-gradient(90deg, #ffb347 60%, #ffe29f 100%)";
            rankingColor = "#7c4a1e";
        } else if (ranking >= 3.5) {
            rankingBg = "linear-gradient(90deg, #ffda8a 60%, #fff3cd 100%)";
            rankingColor = "#7c4a1e";
        } else if (ranking >= 2.5) {
            rankingBg = "linear-gradient(90deg, #ffd6d6 60%,rgb(250, 177, 177) 100%)";
            rankingColor = "#b71c1c";        } else {
            rankingBg = "linear-gradient(90deg, #e57373 60%,rgb(246, 165, 173) 100%)";
            rankingColor = "#fff";
        }
        const imgSrc = `${import.meta.env.BASE_URL}${img}`

        return (
            <Link to={`/article/${id}`} className='post-container' style={{ textDecoration: 'none' }}>
                <span 
                    className="post-type"
                    style={getTypeStyle(type)}
                >
                    {type?.toUpperCase()}
                </span>
                <img src={imgSrc} alt={alt} />
                <h2 style={{ color: "#a05a2c" }}>{truncate(title, 21)}</h2>
                <p style={{ color: "#8d6746", fontWeight: 600 }}>{formatted}</p>
                <p style={{ color: "#5d4037" }}>{text}</p>
                <p className="ranking"
                    style={{
                        background: rankingBg,
                        color: rankingColor
                    }} >
                    Rating: {ranking}/5
                </p>
            </Link>
        );
    }

    // Sort the array and get the latest 3 posts
    const getMostRecentPosts = (posts, count = 3) => {
        return [...posts]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, count);
    };

    return (
        <>
            <h1>Latest Posts</h1>
            <section className='outer-post-container'>
                {getMostRecentPosts(latestPostData, 3).map((post) => (
                    <PostButton
                        key={post.uuid}
                        id={post.uuid}
                        title={post.quick_title}
                        img={post.jpgFileName}
                        alt={post.alt}
                        date={post.date}
                        text={post.text}
                        ranking={post.ranking}
                        type={post.type}
                    />
                ))}
            </section>
        </>
    );
};

export default LatestPosts;