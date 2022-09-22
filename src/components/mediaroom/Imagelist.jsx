import React from "react";
import { LightgalleryItem, } from "react-lightgallery";
import { ykbut, ykbut2, ykbut3, ykbut4 } from "../../assets";
import "./Image.css";

const Imagelist = () => {
  const data = [
    {
      Image: ykbut,
      title: "Gedung YKBUT",
    },
    {
      Image: ykbut2,
      title: "Gedung YKBUT",
    },
    {
      Image: ykbut3,
      title: "Gedung YKBUT",
    },
    {
      Image: ykbut4,
      title: "Gedung YKBUT",
    },
    {
      Image: ykbut3,
      title: "Gedung YKBUT",
    },
    {
      Image: ykbut,
      title: "Gedung YKBUT",
    },
  ];
  return (
    <div className="gallery">
      {data.map((item, index) => {
        <div className="pics">
          <LightgalleryItem key={index} group="any" src={item.image}>
            <img className="d-flex align-items-center" src={item.image} />
            <p>{item.title}</p>
          </LightgalleryItem>
        </div>;
      })}
    </div>
  );
};

export default Imagelist;
