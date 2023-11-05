import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <article className='error-page'>
      <div className="error-box">
        <h1>Nothing here...</h1>
        <div className="useless-con">
          <Link
            to='/'
            className='back-to-home'>
          Back To Home
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Error