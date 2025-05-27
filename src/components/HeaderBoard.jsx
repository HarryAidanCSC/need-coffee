import './HeaderBoard.css';
import searchIcon from './../assets/search-icon1.png';
import { Link } from 'react-router-dom';

const HeaderBoard = () => {
    const preventDefault = (e) => e.preventDefault();

    return (
        <section className='header-section'>
            <Link to="/" className="header-link"><h3>Home</h3></Link>
            <Link to="/about" className="header-link"><h3>About</h3></Link>
            <Link to="/" className="header-title-link">
                <h2>Harry's Coffee Blog</h2>
            </Link>
            <Link to="/blog" className="header-link"><h3>Blog</h3></Link>
            <Link to="/blog"><img className="nonheader-link" src={searchIcon} alt="Search icon" /></Link>
        </section>
    );
};

export default HeaderBoard;