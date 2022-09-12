import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


const DATA = [
  {
    avatar: AVTR1,
    name: 'Avatar 1',
    review:
      'This is the easiest MySQL random test data generator tool. Load the procedure and execute to auto detect column types and load data.'
  },
  {
    avatar: AVTR2,
    name: 'Avatar 2',
    review:
      'This is the easiest MySQL random test data generator tool. Load the procedure and execute to auto detect column types and load data.'
  },
  {
    avatar: AVTR3,
    name: 'Avatar 3',
    review:
      'A browser extension for Chrome, Edge and Firefox that fills dummy text in all input fields in a page.'
  },
  {
    avatar: AVTR4,
    name: 'Avatar 4',
    review: 'Review 4'
  }
]

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {DATA.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonials" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
