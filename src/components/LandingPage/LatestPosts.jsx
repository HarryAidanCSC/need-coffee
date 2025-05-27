import latestPostData from "./../../data/latestPosts";
import './LatestPosts.css'

const LatestPosts = () => {
    const capitalise = str => str.charAt(0).toUpperCase() + str.slice(1); // Capitalises the first letter of a string

    const truncate = (str, maxLength = 24) =>
        str.length > maxLength ? str.slice(0, maxLength - 3) + "..." : str;

const PostButton = ({ title, img, alt, date, text, ranking, type}) => {
    const dateObj = new Date(date);
    const formatted = dateObj.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    let rankingBg, rankingColor;
    if (ranking >= 4.5) {
        rankingBg = "linear-gradient(90deg, #ffb347 60%, #ffe29f 100%)"; // gold
        rankingColor = "#7c4a1e";
    } else if (ranking >= 3.5) {
        rankingBg = "linear-gradient(90deg, #ffda8a 60%, #fff3cd 100%)"; // yellow
        rankingColor = "#7c4a1e";
    } else if (ranking >= 2.5) {
        rankingBg = "linear-gradient(90deg, #ffd6d6 60%,rgb(250, 177, 177) 100%)"; // light red
        rankingColor = "#b71c1c";
    } else {
        rankingBg = "linear-gradient(90deg, #e57373 60%,rgb(246, 165, 173) 100%)"; // red
        rankingColor = "#fff";
    }

        return (
        <button onClick={(e) => e.preventDefault()} className='post-container'>
            <h3 style={{ color: "#b86b2b" }}>{capitalise(type)}</h3>
            <img src={img} alt={alt} />
            <h2 style={{ color: "#a05a2c" }}>{truncate(title, 24)}</h2>
            <p style={{ color: "#8d6746", fontWeight: 600 }}>{formatted}</p>
            <p style={{ color: "#5d4037" }}>{text}</p>
            <p
                className="ranking"
                style={{
                    background: rankingBg,
                    color: rankingColor
                }}
            >
                Ranking: {ranking}/5
            </p>
        </button>
        );
    }
    
    const getMostRecentPosts = (posts, count = 2) => {
        return Object.entries(posts)
            .sort(([, a], [, b]) => new Date(b.summary.date) - new Date(a.summary.date))
            .slice(0, count)
            .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
            }, {});
        };


    return (
        <>
        <h1>Latest Posts</h1>
        <section className='outer-post-container'>
            {Object.entries(getMostRecentPosts(latestPostData, 3)).map(([key, post]) => (
                <PostButton key={key} {...post['summary']} />
            ))}
        </section>
        </>
    );
};

export default LatestPosts;
