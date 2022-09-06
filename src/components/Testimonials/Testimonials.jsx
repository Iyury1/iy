import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.png'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
    {
        avatar: AVTR1,
        name: 'Anonymous Developer',
        review: "Kinda... You're stitching a react solution together. In other words you're scripting",
    },
    {
        avatar: AVTR2,
        name: 'Anonymous Developer',
        review: "If the job says 1-2 years of experience you apply to. Because you have projects you've worked on",
    },
    {
        avatar: AVTR3,
        name: 'Anonymous Shop Owner',
        review: "Willing to work on any job given, even if it meant he had to do a bit of research",
    },
    {
        avatar: AVTR4,
        name: 'Romeo',
        review: "",
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination, Navigation, Scrollbar, A11y]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                navigation
            >
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="Avatar One"/>
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials