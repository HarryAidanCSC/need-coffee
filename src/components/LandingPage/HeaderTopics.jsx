import bean from './../../assets/bean.png'
import aeropress from './../../assets/aeropress.png'
import brewer from './../../assets/brewer.png'
import cup from './../../assets/cup.png'
import './HeaderTopics.css'
import { useNavigate } from 'react-router-dom';

const HeaderTopics = () => {
    const navigate = useNavigate();
    const preventDefault = (e) => e.preventDefault();

    const navigateToBlog = (filterType) => {
        navigate('/blog', { state: { initialFilter: filterType } });
    };

    const categories = [
        { id: 'beans', name: "The Best Beans", icon: bean, alt: "Coffee bean", desc: "Discover my favourite beans for you to try.", onClick: () => navigateToBlog('beans') },
        { id: 'brewing', name: "Brewing Methods", icon: aeropress, alt: "Aeropress", desc: "Master the best brewing methods at home.", onClick: () => navigateToBlog('brewing') },
        { id: 'shops', name: "Coffee Shops", icon: cup, alt: "Coffee mug", desc: "Explore my top recommendations worldwide.", onClick: () => navigateToBlog('coffee shop') },
        { id: 'brands', name: "Favourite Brands", icon: brewer, alt: "Coffee filter", desc: "Hot takes and honest reviews.", onClick: preventDefault }
    ];

    return (
        <div className="categories-container">
            <h2 className="section-heading">Explore by Category</h2>
            <div className="categories-grid">
                {categories.map((cat) => (
                    <button key={cat.id} className="category-card" onClick={cat.onClick}>
                        <div className="category-icon-wrapper">
                            <img src={cat.icon} alt={cat.alt} />
                        </div>
                        <div className="category-content">
                            <h3>{cat.name}</h3>
                            <p>{cat.desc}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default HeaderTopics;