import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href= '/about'>About Us</a>
            </li>
            <li>
              <a href='/pricing'>Career</a>
            </li>
            <li>
              <a href='/team'>Services</a>
            </li>
            <li>
              <a href='/courses'>Business</a>
            </li>
            <li>
              <a href='/journal'>Gallery</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>YAYASAN KARYA BAKTI UT</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
