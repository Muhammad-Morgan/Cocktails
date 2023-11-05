import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Sidebar from '../components/Sidebar'
const About = () => {
  return (
    <>
      <Button />
      <article className='center-of-page'>
        <Sidebar />
        <div className="about-con">
          <h1 className='about-h1'>About Us</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas in alias modi voluptatibus facere vitae sed ipsam iure. Id possimus in esse mollitia illo, voluptatum molestias officia quae aliquid repellendus iusto.
            voluptatibus facere vitae sed ipsam iure. Id possimus in esse mollitia illo, voluptatum molestias officia quae aliquid repellendus iusto.voluptatibus facere vitae sed ipsam iure. Id possimus in esse mollitia illo, voluptatum molestias officia quae aliquid repellendus iusto.
          </p>
          <div className="contact-about-bth">
            <Link to='/'
              className='about-bth-button'>
              Back to home
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}

export default About