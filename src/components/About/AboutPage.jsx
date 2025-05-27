import './AboutPage.css'
import HeaderBoard from '../HeaderBoard'
import FooterBoard from '../FooterBoard'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import wetRat from './../../assets/wet-rat.png'

const AboutPage = () => {
    return (
        <>
            <HeaderBoard />
            <main>
                <h1 className="article-title">About Harry's Coffee Blog</h1>
                <div className="article-main-content">
                    <div className="article-left">
                        <div className="about-photo-section">
                            <img src={wetRat} alt="Harry with his favorite coffee" className="about-photo" />
                            <div className="social-links">
                                <h3>Connect with me:</h3>
                                <a
                                    href="https://github.com/HarryAidanCSC"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                >
                                    <FaGithub size={20} /> GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/harry-mancinelli-830430222/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin size={20} /> LinkedIn
                                </a>
                                <a
                                    href="https://x.com/MancinelliHarry"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Twitter"
                                >
                                    <FaXTwitter size={20} /> Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="article-text">
                        <article>
                            <p>Welcome to my corner of the coffee universe! I'm Harry, a passionate coffee enthusiast who believes that every cup tells a story.</p>
                            
                            <h2>My Coffee Journey</h2>
                            <p>What started as a simple morning ritual has evolved into a deep appreciation for the art and science of coffee. From my first sip of a perfectly extracted espresso to discovering hidden gem coffee shops around the world, my journey has been fueled by curiosity and caffeine.</p>
                            
                            <p>I've spent years exploring different brewing methods, tasting beans from various origins, and learning from baristas who are true craftspeople. This blog is where I share those discoveries with fellow coffee lovers.</p>
                            
                            <h2>What You'll Find Here</h2>
                            <p><strong>🫘 Bean Reviews:</strong> Detailed reviews of coffee beans from around the world, helping you discover your next favorite roast.</p>
                            
                            <p><strong>☕ Coffee Shop Adventures:</strong> Reviews and recommendations of coffee shops I've visited, from local favorites to destination cafés.</p>
                            
                            <p><strong>⚗️ Brewing Guides:</strong> Step-by-step guides for various brewing methods to help you make better coffee at home.</p>
                            
                            <h2>My Coffee Philosophy</h2>
                            <p>Great coffee isn't just about the beans or the equipment – it's about the entire experience. The aroma that fills your kitchen, the ritual of preparation, the moment of that first perfect sip. Coffee connects us to farmers, roasters, and communities around the world.</p>
                            
                            <p>Whether you're a casual coffee drinker or a serious aficionado, there's always something new to discover in the world of coffee. Join me on this caffeinated adventure!</p>
                            
                            <h2>Let's Connect</h2>
                            <p>Have a coffee shop recommendation? Want to share your brewing tips? I'd love to hear from fellow coffee enthusiasts! You can find me on social media or drop me a line directly.</p>
                        </article>
                    </div>
                </div>
            </main>
            <FooterBoard />
        </>
    );
};

export default AboutPage;
