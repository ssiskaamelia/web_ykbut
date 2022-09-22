import React from "react";
import Logo from "../../../assets/image/logo.png";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <a href="/" className="homeLink">
              <img src={Logo} alt="LOGO YKBUT" className="image" />
            </a>
          </div>

          <div className="social">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/"
              className="nav-link p-0 text-muted mx-2"
            >
              <i className="fab fa-linkedin icon"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/ykbutofficial/"
              className="nav-link p-0 text-muted mx-2"
            >
              <i className="fab fa-instagram icon"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/"
              className="nav-link p-0 text-muted mx-2"
            >
              <i className="fab fa-twitter icon"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCOsZmiEPqgyOwOPDRJYUJzg"
              className="nav-link p-0 text-muted mx-2"
            >
              <i className="fab fa-youtube icon"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
