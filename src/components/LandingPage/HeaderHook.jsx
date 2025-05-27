import './HeaderHook.css';
import { Link } from 'react-router-dom'

const HeaderHook = () => {
    const preventDefault = (e) => e.preventDefault();

    return (
        <section className='header-hook-container'>
            <h2>Freshly Brewed Blog Posts</h2>
            <Link to="/blog" className="header-link"><h3>Read More</h3></Link>
        </section>
    );
}

export default HeaderHook;
