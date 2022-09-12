import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

function Portfolio() {
  const DATA = [
    {
      id: 1,
      image: IMG1,
      title: 'Portfolio 1',
      demo: 'https://www.github.com'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Portfolio 2',
      demo: 'https://www.github.com'
    }
    // {
    //   id: 3,
    //   image: IMG3,
    //   title: 'Portfolio 3',
    //   demo: 'https://www.github.com'
    // },
    // {
    //   id: 4,
    //   image: IMG4,
    //   title: 'Portfolio 4',
    //   demo: 'https://www.github.com'
    // },
    // {
    //   id: 5,
    //   image: IMG5,
    //   title: 'Portfolio 5',
    //   demo: 'https://www.github.com'
    // },
    // {
    //   id: 6,
    //   image: IMG6,
    //   title: 'Portfolio 6',
    //   demo: 'https://www.github.com'
    // }
  ]
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {DATA.map((data) => {
          return (
            <article className="portfolio__item" key={data.id}>
              <div className="portfolio__item-image">
                <img src={data.image} alt="Image 1" />
              </div>
              <h3>{data.title}</h3>
              <div className="portfolio__item-cta">
                <a href="https://github.com" className="btn">
                  Github
                </a>
                <a
                  href={data.demo}
                  className="btn btn-primary"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
