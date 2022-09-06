import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>My Skills Include</h5>
            <h3>Embedded C Programming</h3>
            <h3>FPGA Design in VHDL</h3>
            <h3>Object Oriented Programming in Java</h3>
            <h3>Android App Development</h3>
            <div className='container experience__container'>
                <div className="experience__languages">
                    <h3>Programming Lanuages</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <div className="experience__details-icon-div">
                                <BsPatchCheckFill className='experience__details-icon'/>
                            </div>
                            <div className="experience__details-text">
                                <h4>C/C++</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div className='experience__details-icon-div'>
                                <BsPatchCheckFill className='experience__details-icon'/>
                            </div>
                            <div className="experience__details-text">
                                <h4>Java</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div className='experience__details-icon-div'>
                                <BsPatchCheckFill className='experience__details-icon'/>
                            </div>
                            <div className="experience__details-text">
                                <h4>Python</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div className='experience__details-icon-div'>
                                <BsPatchCheckFill className='experience__details-icon'/>
                            </div>
                            <div className="experience__details-text">
                                <h4>VHDL</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div className='experience__details-icon-div'>
                                <BsPatchCheckFill className='experience__details-icon'/>
                            </div>
                            <div className="experience__details-text">
                                <h4>Bash</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                                <BsPatchCheckFill className='experience__details-icon'/>
                            </div>
                            <div className="experience__details-text">
                                <h4>SQLite</h4>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__tools">
                    <h3>Programming Lanuages</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <div className='experience__details-icon-div'>
                                <BsPatchCheckFill className='experience__details-icon'/>
                            </div>
                            <div className="experience__details-text">
                                <h4>Android Studio</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div className='experience__details-icon-div'>
                                <BsPatchCheckFill className='experience__details-icon'/>
                            </div>
                            <div className="experience__details-text">
                                <h4>PlatformIO</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div className='experience__details-icon-div'>
                                <BsPatchCheckFill className='experience__details-icon'/>
                            </div>
                            <div className="experience__details-text">
                                <h4>STM32CubeIDE</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                           <div className='experience__details-icon-div'>
                                <BsPatchCheckFill className='experience__details-icon'/>
                            </div>
                            <div className="experience__details-text">
                                <h4>GDB</h4>
                           </div>
                        </article>
                        <article className="experience__details">
                            <div className='experience__details-icon-div'>
                                <BsPatchCheckFill className='experience__details-icon'/>
                            </div>
                            <div className="experience__details-text">
                                <h4>Makefile</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div className='experience__details-icon-div'>
                                <BsPatchCheckFill className='experience__details-icon'/>
                            </div>
                            <div className="experience__details-text">
                                <h4>Xilinx Vivado</h4>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience