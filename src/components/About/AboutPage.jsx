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
                            <p> To be updated! </p>
                        </article>
                    </div>
                </div>
            </main>
            <FooterBoard />
        </>
    );
};

export default AboutPage;
