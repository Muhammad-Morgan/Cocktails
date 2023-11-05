import React, { useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../Context'

const Button = () => {
  const { openSideBar } = useGlobalContext()
  const [dynamicBtn, setDynamicBtn] = React.useState(false)
  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      setDynamicBtn(!dynamicBtn)
    }, 750)
    return () => clearTimeout(timeOut)
  }, [dynamicBtn])
  return (
    <section className='dynamic-btn-con'>
      <button
        onClick={openSideBar}
        className={`dynamic-btn ${dynamicBtn ? 'dynamic-btn-change' : ''}`}>
        <FaBars />
      </button>
    </section>
  )
}

export default Button