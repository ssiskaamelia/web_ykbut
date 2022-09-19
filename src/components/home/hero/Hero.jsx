import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO' title='Yayasan Karya Bakti United Tractors' />
            <p>SYNERGY | COMPETENT | SPEED | PRODUCTIVE</p>
            <div className='button'>
              <button className='primary-btn' style={{cursor: "pointer"}}>
                LET'S JOIN UP <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
