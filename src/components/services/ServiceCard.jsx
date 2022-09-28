import React from "react";
import { services } from "../../dummydata";

const ServiceCard = () => {
  return (
    <>
      {services.map((val) => (
        <div className="items shadow">
          <div className="img">
            <img src={val.cover} alt="" />
            <div className="overlay">
              <i className="fab fa-instagram icon" onClick={() => window.open(val.linkIg)}></i>
              <i className="fab fa-youtube icon" onClick={() => window.open(val.youtube)}></i>
            </div>
          </div>
          <div className="details" onClick={() => window.open(val.url)}>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceCard;
