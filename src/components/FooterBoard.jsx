import './FooterBoard.css';
import coffeeIcon from './../assets/icon.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const FooterBoard = () => {
    return (
        <section className='footer-section'>
            <img src={coffeeIcon} alt="Coffee icon" />
            <div className="footer-socials">
                <a
                    href="https://github.com/HarryAidanCSC"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub size={26} />
                </a>
                <a
                    href="https://www.linkedin.com/in/harry-mancinelli-830430222/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin size={26} />
                </a>
                <a
                    href="https://x.com/MancinelliHarry"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                >
                    <FaXTwitter size={26} />
                </a>
            </div>
            <span className="footer-message">I hope you enjoy reading!</span>
        </section>
    );
};

export default FooterBoard;