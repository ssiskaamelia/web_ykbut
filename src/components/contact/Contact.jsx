import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/search?client=firefox-b-d&q=united%20tractors%20maps&tbs=lf:1,lf_ui:4&tbm=lcl&sxsrf=ALiCzsYwIrSMiNYXu2xN8g6EPeW8Ete6hQ:1663314912872&rflfq=1&num=10&rldimm=2083504127460534409&lqi=ChR1bml0ZWQgdHJhY3RvcnMgbWFwcyIDiAEBSLCF2dLrgICACFohEAAQARgAGAEiD3VuaXRlZCB0cmFjdG9ycyoGCAIQABABkgEQY29ycG9yYXRlX29mZmljZaoBFxABKhMiD3VuaXRlZCB0cmFjdG9ycygA&ved=2ahUKEwiryZ_06pj6AhWBieYKHdrSAEAQvS56BAgDEAE&sa=X&rlst=f#rlfi=hd:;si:2083504127460534409,l,ChR1bml0ZWQgdHJhY3RvcnMgbWFwcyIDiAEBSLCF2dLrgICACFohEAAQARgAGAEiD3VuaXRlZCB0cmFjdG9ycyoGCAIQABABkgEQY29ycG9yYXRlX29mZmljZaoBFxABKhMiD3VuaXRlZCB0cmFjdG9ycygA;mv:[[-6.1513701,106.9383371],[-6.1880660999999995,106.9275354]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:4" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Jl. Raya Bekasi No.KM. 22, Cakung Bar., Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13910</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> example@ykbut.co.id</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>(021) 24579999</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
