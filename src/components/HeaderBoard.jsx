import './HeaderBoard.css';
import { Link } from 'react-router-dom';

const HeaderBoard = () => {
    return (
        <nav className='header-nav'>
            <div className="header-nav-left">
                <Link to="/" className="header-link">Home</Link>
                <Link to="/about" className="header-link">About</Link>
            </div>
            
            <Link to="/" className="header-brand">
                Harry's Coffee Blog
            </Link>

            <div className="header-nav-right">
                <Link to="/blog" className="header-link">Blog</Link>
            </div>
        </nav>
    );
};

export default HeaderBoard;