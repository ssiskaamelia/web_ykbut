import React from "react"
import Back from "../common/back/Back"
import ServiceCard from "./ServiceCard"
import "./team.css"
import "../about/about.css"
const Service = () => {
  return (
    <>
      <Back title='SERVICES' />
      <section className='team padding'>
        <div className='container grid'>
          <ServiceCard />
        </div>
      </section>
      {/* <Awrapper /> */}
    </>
  )
}

export default Service
