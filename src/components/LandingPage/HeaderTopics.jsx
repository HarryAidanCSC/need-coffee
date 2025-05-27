import bean from './../../assets/bean.png'
import brewer from './../../assets/brewer.png'
import cup from './../../assets/cup.png'
import './HeaderTopics.css'

const HeaderTopics = () => {
    const preventDefault = (e) => e.preventDefault();

    const assets = {
    bean: { name: "The Best Beans", icon: bean, alt: "coffee bean", text: "Click here to find my favourite beans for you to try"},
    asset2: { name: "How to Brew", icon: brewer, alt: "coffee filter", text: "Click here for the best brewing methods at home!"},
    asset3: { name: "Favourite Coffee Shops", icon: cup, alt: "coffee mug", text: "Click here for my best recommendations!"}
    };
    
    function TopicButton({ name, icon, alt, text }) {
    return (
        <button onClick={preventDefault} className='topic-container'>
            <img src={icon} alt={alt} />
            <h3>{name}</h3>
            <p>{text}</p>
        </button>
    );
    }


    return (
        <section className='outer-topic-container'>
            {Object.entries(assets).map(([key, { name, icon, alt, text }]) => (
            <TopicButton key={key} name={name} icon={icon} alt={alt} text={text}/>
            ))}
        </section>
    )
}


export default HeaderTopics