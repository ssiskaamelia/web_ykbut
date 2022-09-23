import React from "react";
import { pancadaya, peduliinsani } from "../../assets";

const Culture = () => {
  return (
    <div className="">
      <div>
        {/* <h1
          style={{
            position: "absolute",
            width: "253px",
            height: "54px",
            left: "181px",
            top: "1461px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "36px",
            lineHeight: "54px",
            textAlign: "center",
            color: "#524A4E",
          }}
        >
          PEDULI INSANI
        </h1> */}
        <img
          style={{
            position: "absolute",
            width: "650px",
            height: "auto",
            left: "773px",
            top: "2445px",
          }}
          src={peduliinsani}
          alt=""
          class="image-caracter"
        />
      </div>
      <div>
        <img
          style={{
            position: "absolute",
            width: "650px",
            height: "auto",
            left: "135px",
            top: "1869px",
          }}
          src={pancadaya}
          alt=""
          class=""
        />
      </div>
    </div>
  );
};
export default Culture;
