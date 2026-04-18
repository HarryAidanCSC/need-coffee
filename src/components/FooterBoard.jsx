import './FooterBoard.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const FooterBoard = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>Harry's Coffee Blog</h3>
                    <p>Exploring the world, one cup at a time.</p>
                </div>
                
                <div className="footer-socials">
                    <a href="https://github.com/HarryAidanCSC" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub size={22} />
                    </a>
                    <a href="https://www.linkedin.com/in/harry-mancinelli-830430222/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin size={22} />
                    </a>
                    <a href="https://x.com/MancinelliHarry" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaXTwitter size={22} />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {currentYear} Harry Mancinelli. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default FooterBoard;