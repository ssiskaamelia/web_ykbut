import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
          {/* <a href="/" className="homeLink">
              <img src={Logo} alt="LOGO YKBUT" className="image" />
            </a> */}
            <h1>LOGO</h1>
            <span>YAYASAN KARYA BAKTI UNITED TRACTORS</span>
          </div>

          <div className='social'>
            <i className='fab fa-linkedin icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
