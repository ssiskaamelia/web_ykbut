import React from "react";
import { blog } from "../../../dummydata";
import Logo from "../../../assets/image/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - </h1>
            <span style={{ fontSize: "25px" }}>
              Stay tune and get the latest update
            </span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <div className="logo">
              <a href="/" className="homeLink">
                <img src={Logo} alt="LOGO YKBUT" className="image" />
              </a>
            </div>
            <div style={{ display: "flex" }}>
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
                <i className="fab fa-youtube icon"></i>
              </a>
            </div>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Career</li>
              <li>Services</li>
              <li>Business</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Career</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                Yayasan Karya Bakti UT. Jl. Raya Bekasi Km 22, Cakung. Jakarta
                Timur 13910
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +2 392 3929 210
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2022 All rights reserved | YAYASAN KARYA BAKTI UT{" "}
          <i className="fa fa-heart"></i>
        </p>
      </div>
    </>
  );
};

export default Footer;
