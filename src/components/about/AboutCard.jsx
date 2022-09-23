import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import { culture, struktur, ykbut4 } from "../../assets";
import Testimonal from "../home/testimonal/Testimonal"
import Culture from "./culture"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src={ykbut4} alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='WHAT IS YKBUT ?' title='All About YKBUT' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
      <div>
      {/* <Culture /> */}
      <Heading subtitle='CULTURE' title="Caracter & Culture"/>
        <img src={culture} alt="image-culture" class="center" />
      </div>
      <Testimonal />
    </>
  )
}

export default AboutCard
