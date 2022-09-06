import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className='container services__container'>
                <article className="service">
                    <div className="service__head">
                        <h3>Embedded System Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>
                                Part Selection
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>
                                Firmware Development
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>
                                Computer Interfacing
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>
                                Socket Programming
                            </p>
                        </li>
                    </ul>
                </article>
                {/* END OF EMBEDDED SYSTEM DESIGN*/}
                <article className="service">
                    <div className="service__head">
                        <h3>FPGA Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>
                                Xilinx Vivado Projects
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>
                                VHDL
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>
                                Structured Testbenches
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>
                                Versal Architecture
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>
                                Lattice Diamond Projects
                            </p>
                        </li>
                    </ul>
                </article>
                {/* END OF FPGA DESIGN*/}
                <article className="service">
                    <div className="service__head">
                        <h3>Mobile Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>
                                Cross-Platform with React Native
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>
                                UI Design with Figma
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>
                                Java Android Development
                            </p>
                        </li>
                    </ul>
                </article>
                {/* END OF MOBILE DEVELOPMENT*/}

            </div>
        </section>
    )
}

export default Services