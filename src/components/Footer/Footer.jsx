import './footer.css'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">IYURYCHUK</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
                <li><a href="#Testimonials">Testimonials</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://linked-in.com"><FaLinkedin/></a>
            </div>
            <div className="footer__copyright">
                 <small>&copy; IYURYCHUK Solutions. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer