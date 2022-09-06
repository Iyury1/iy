import './about.css'
import ME_ABOUT from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME_ABOUT} alt='About Image' />
                    </div>
                </div>
                
                <div className="about__content">
                    <div className="about__cards">
                        <div className="about__content">
                            <article className="about__card">
                                <FaAward className='about__icon'/>
                                <h5>Experience</h5>
                                <h6>2 Years Software Dev,</h6>
                                <h6>6 Years Auto Repair</h6>
                            </article>
                        </div>
                        <div className="about__content">
                            <article className="about__card">
                                <FiUsers className='about__icon'/>
                                <h5>Clients</h5>
                                <h6>Albertaloop,</h6>
                                <h6>ARVP</h6>
                            </article>
                        </div>
                        <div className="about__content">
                            <article className="about__card">
                                <VscFolderLibrary className='about__icon'/>
                                <h5>Projects</h5>
                                <h6>Vehicle Navigation,</h6>
                                <h6>Underwater Acoustic Modem</h6>
                            </article>
                        </div>
                    </div>
                    <div className="about__paragraph">
                        <p>
                            Goal-focused, professional phlebotomist with all necessary certifications to work in the state of Indiana
                            seeking a leadership role with a thriving, growing company to to apply my knowledge of phlebotomy-related
                            processes and protocols while working toward a common goal to increase productivity.
                        </p>
                        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About