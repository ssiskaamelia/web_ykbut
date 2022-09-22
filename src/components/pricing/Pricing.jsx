import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"
import CareerInfo from "./CareerInfo"

const Career = () => {
  return (
    <>
      <Back title='CAREER' />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      {/* <CareerInfo /> */}
      <Faq />
    </>
  )
}

export default Career
