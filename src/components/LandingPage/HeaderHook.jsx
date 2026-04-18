import './HeaderHook.css';
import { Link } from 'react-router-dom'

const HeaderHook = () => {
    return (
        <div className='latest-header'>
            <h2 className="section-heading">Fresh From The Roaster</h2>
            <Link to="/blog" className="view-all-link">View All Articles &rarr;</Link>
        </div>
    );
}

export default HeaderHook;
