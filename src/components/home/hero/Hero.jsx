import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row" style={{textAlign : "Left"}}>
            <Heading subtitle="" title="YAYASAN KARYA BAKTI" />
            <Heading style={{color: "FF5C8D"}} title="UNITED TRACTORS" />
            <div className="button">
              <a href="/contact">
                <button className="primary-btn">
                  CONTACT US <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </a>
              {/* <a href="about">
                <button className="btn" style={{ cursor: "pointer" }}>
                  Get started
                </button>
              </a> */}
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
