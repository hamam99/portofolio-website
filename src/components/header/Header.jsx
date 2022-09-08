import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'

function Header() {
  return (
    <header>
      <div className="container heade__container">
        <h5>Hello I'm</h5>
        <h1>Hamam Nasrodin</h1>
        <h5 className="text-light">React Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header