import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { social } from '../Data'
import { useGlobalContext } from '../Context'

const Sidebar = () => {
  const { sideBar, closeSideBar } = useGlobalContext()
  return (
    <section className={`sidebar ${sideBar ? 'active' : ''} `}>
      <div className="sidebar-center">
        <div className="close-btn-con">
          <button onClick={closeSideBar}
            className="sidebar-close-btn">
            <FaTimes />
          </button>
        </div>
        <div className="free-offer">
          <Link
            className='custom-link'
            to='*'>
            Our Free Products!
          </Link>
        </div>
        <div className="links-list-container">
          <ul className='links-list'>
            <li>
              <Link
                className='links'
                to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link
                className='links'
                to='/about'>
                About
              </Link>
            </li>
            <li>
              <Link
                className='links'
                to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="social-links-container">
          <ul className="social-links">
            {social.map(({ id, url, icon, name }) => {
              return <li
                style={{ display: 'flex'}}
                key={id} >
                <a className='social-link' href={url}>
                  {icon}
                  {name}
                </a>
              </li>
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Sidebar