import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar 1" />
            <h5>Ernest Archiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              nesciunt. Accusantium impedit ea excepturi in recusandae?
              Laudantium expedita nesciunt voluptate ex quia, animi pariatur
              natus possimus similique suscipit. Eveniet, ullam!
            </small>
          </div>
        </article>

        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar 1" />
            <h5>Ernest Archiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              nesciunt. Accusantium impedit ea excepturi in recusandae?
              Laudantium expedita nesciunt voluptate ex quia, animi pariatur
              natus possimus similique suscipit. Eveniet, ullam!
            </small>
          </div>
        </article>

        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar 1" />
            <h5>Ernest Archiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              nesciunt. Accusantium impedit ea excepturi in recusandae?
              Laudantium expedita nesciunt voluptate ex quia, animi pariatur
              natus possimus similique suscipit. Eveniet, ullam!
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials
