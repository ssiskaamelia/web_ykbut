import { color } from "@mui/system";
import React from "react";
import Back from "../common/back/Back";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <Back title="CONTACT US" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <div class="mapouter" style={{ height: "100%", padding: "40px" }}>
              <div class="gmap_canvas" style={{ height: "100%" }}>
                <iframe
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Jl.%20Raya%20Bekasi%20No.KM.%2022,%20Cakung%20Bar.,%20Kec.%20Cakung,%20Kota%20Jakarta%20Timur,%20Daerah%20Khusus%20Ibukota%20Jakarta%2013910&t=&z=17&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="right row">
            <h1>CONTACT US</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items">
              <div className="box">
                <h4>WORKING HOURS :</h4>
                <p style={{color : '#000B49'}}>Monday - Friday : 07.30am to 16.30pm</p>
                <p style={{marginTop : 0, color: '#A10035'}}>Saturday - Sunday : "Closed"</p>
              </div>
              <div className="box">
                <h4>LOCATION :</h4>
                <p>
                  Jl. Raya Bekasi No.KM. 22, Cakung Bar. / Kecamatan Cakung, Kota
                  Jakarta Timur/ DKI Jakarta 13910
                </p>
              </div>
              <div className="box">
                <h4>EMAIL :</h4>
                <p> example@ykbut.co.id</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>FOLLOW US</h3>
            <span>INSTAGRAM | TWITTER | YOUTUBE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
