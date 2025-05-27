import './HeaderHook.css';

const HeaderHook = () => {
    const preventDefault = (e) => e.preventDefault();

    return (
        <section className='header-hook-container'>
            <h2>Freshly Brewed Blog Posts</h2>
            <button onClick={preventDefault}>Read More</button>
        </section>
    );
}

export default HeaderHook;
