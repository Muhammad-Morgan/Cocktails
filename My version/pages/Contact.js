import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Sidebar from '../components/Sidebar'
const Contact = () => {
  return (
    <>
      <Button />
      <Sidebar />
      <article className='center-of-page'>
        <div className="contact-con">
          <h1 className='contact-h1'>Contact Us</h1>
          <section className="contact-info">
            <h4><span>Email:</span>myemail@gmail.com</h4>
            <h4><span>Phone:</span>+1 000-111-2244</h4>
            <h4><span>Address:</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, facere.</h4>
          </section>
          <div className="contact-about-bth">
            <Link to='/'
              className='contact-bth-button'>
              Back to home
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}

export default Contact