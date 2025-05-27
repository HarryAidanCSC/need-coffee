import './HeaderBoard.css';
import searchIcon from './../assets/search-icon1.png';

const HeaderBoard = () => {
    const preventDefault = (e) => e.preventDefault();

    return (
    <section className='header-section'>
        <a href="#" onClick={preventDefault}><h3>Home</h3></a>
        <a href="#" onClick={preventDefault}><h3>About</h3></a>
        <a href="#" onClick={preventDefault}><h3>Blog</h3></a>
        <img src={searchIcon} alt="Search icon" />
    </section>
  );
};

export default HeaderBoard;
