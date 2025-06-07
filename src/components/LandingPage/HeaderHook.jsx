import './HeaderHook.css';
import { Link } from 'react-router-dom'

const HeaderHook = () => {
    return (
        <section className='header-hook-container'>
            <h2>Fresh Blog Posts</h2>
            <Link to="/blog" className="header-link"><h3>Read More</h3></Link>
        </section>
    );
}

export default HeaderHook;
