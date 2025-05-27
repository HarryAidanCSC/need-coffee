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

    const assets = {
    bean: { name: "The Best Beans", icon: bean, alt: "coffee bean", text: "Click here to find my favourite beans for you to try", onClick: () => navigateToBlog('beans')},
    asset2: { name: "Brewing", icon: aeropress, alt: "aeropress device", text: "Click here for the best brewing methods at home!", onClick: () => navigateToBlog('brewing')},
    asset3: { name: "Favourite Coffee Shops", icon: cup, alt: "coffee mug", text: "Click here for my best recommendations!", onClick: () => navigateToBlog('coffee shop')},
    asset4: { name: "Favourite Coffee Brands", icon: brewer, alt: "coffee filter", text: "Click here for some hot takes!", onClick: preventDefault}
    };
    
    function TopicButton({ name, icon, alt, text, onClick }) {
    return (
        <button onClick={onClick || preventDefault} className='topic-container'>
            <img src={icon} alt={alt} />
            <h3>{name}</h3>
            <p>{text}</p>
        </button>
    );
    }


    return (
        <section className='outer-topic-container'>
            {Object.entries(assets).map(([key, { name, icon, alt, text, onClick }]) => (
            <TopicButton key={key} name={name} icon={icon} alt={alt} text={text} onClick={onClick}/>
            ))}
        </section>
    )
}


export default HeaderTopics