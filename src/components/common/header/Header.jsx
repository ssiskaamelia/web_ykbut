import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/about">ABOUT US</a>
            </li>
            <li>
              <a href="/career">CAREER</a>
            </li>
            <li>
              <a href="/services">SERVICES</a>
            </li>
            <li>
              <a href="/business">BUSINESS</a>
            </li>
            <li>
              <a href="/media">MEDIA</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
          <div className="start">
            <div className="button">YAYASAN KARYA BAKTI UT</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
