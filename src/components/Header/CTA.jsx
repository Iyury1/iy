import CV from '../../assets/cv.pdf'

const CTA = () => {
    return (
        <>
            <div className="btn">
                <a href={CV} download>Download CV</a>
            </div>
            <div className="btn">
                <a href="#contact">Let's Talk</a>
            </div>
        </>
    )
}

export default CTA