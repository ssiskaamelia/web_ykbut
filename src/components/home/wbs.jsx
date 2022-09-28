import React from "react";
import Back from "../common/back/Back";
import Heading from "../common/heading/Heading";
import { whistleblowingsystem } from "../../dummydata";

const Whistleblowing = () => {
  return (
    <>
      <Back subtitle="WBS" title="Whistle Blowing System" />
      <section className="wbs">
        <div className="container flex">
          {whistleblowingsystem.map((val) => (
            <>
              <div className="left" data-aos="fade-down-right">
                <img src={val.cover} alt="" />
              </div>
              <div className="right" data-aos="fade-down-left">
                <Heading title="Whistle Blowing System" />
                <p>{val.desc}</p>
                <p style={{ marginTop: "20px" }}> {val.desc1}</p>
                <a
                  href="Pedoman_Whislte_Blower_YKBUT_2021.pdf"
                  download="Pedoman_Whistle_Blower_YKBUT_2021.pdf"
                >
                  <button
                    className="primaryBtn"
                    style={{
                      float: "right",
                      marginBottom: "20px",
                      marginTop: "20px",
                    }}
                  >
                    Download PDF
                  </button>
                </a>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Whistleblowing;
