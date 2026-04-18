import './AboutPage.css'
import HeaderBoard from '../HeaderBoard'
import FooterBoard from '../FooterBoard'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import wetRat from './../../assets/wet-rat.png'

const AboutPage = () => {
    return (
        <div className="page-wrapper">
            <HeaderBoard />
            <main className="about-main">
                <article className="about-container">
                    <header className="about-header">
                        <span className="about-tag">About The Blog</span>
                        <h1 className="about-title">Harry's Coffee Blog</h1>
                        <p className="about-subtitle">By Harry Mancinelli &bull; Coffee enthusiast, software developer, and lifelong learner.</p>
                    </header>
                    
                    <div className="about-content-wrapper">
                        <aside className="about-sidebar">
                            <div className="about-photo-wrapper">
                                <img src={wetRat} alt="Harry Mancinelli" className="about-photo" />
                            </div>
                            <div className="sidebar-module social-module">
                                <h3>Connect</h3>
                                <div className="about-socials">
                                    <a href="https://github.com/HarryAidanCSC" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                        <FaGithub size={24} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/harry-mancinelli-830430222/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                        <FaLinkedin size={24} />
                                    </a>
                                    <a href="https://x.com/MancinelliHarry" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                        <FaXTwitter size={24} />
                                    </a>
                                </div>
                            </div>
                        </aside>

                        <div className="about-body">
                            <h2>My Journey with Coffee</h2>
                            <p>
                                Welcome to my coffee journal. What started as a simple necessity for late-night coding sessions 
                                quickly blossomed into a deep dive into the world of specialty coffee. From pulling the perfect 
                                espresso shot to exploring the subtle notes of single-origin pour-overs, this blog is my space 
                                to share the craft, the culture, and the community of coffee.
                            </p>
                            <h2>The Intersection of Tech and Taste</h2>
                            <p>
                                As a software engineer, I appreciate precision, process, and iterative improvement—all of which 
                                are essential to mastering coffee brewing. I built this site from scratch to showcase not just 
                                my favourite beans and cafes, but also to build a platform where elegant design meets robust engineering.
                            </p>
                            <p>
                                Whether you're a seasoned barista or just starting to look beyond instant coffee, I hope you 
                                find inspiration, recommendations, and honest reviews here. Enjoy reading!
                            </p>
                        </div>
                    </div>
                </article>
            </main>
            <FooterBoard />
        </div>
    );
};

export default AboutPage;
