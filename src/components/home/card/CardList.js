import React from "react";

const CardList = (props) => {
  return (
    <li style={{ marginLeft: "5px", marginRight: "5px", listStyle: "none" }}>
      <a
        href={props.path}
        style={{
          textDecoration: "none",
          color: "black",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {/* untuk membuat tampilan spt di figma cuman butuh tag img sama button */}
        <img src={props.img} alt={props.alt} style={{ width: "90%", borderRadius: '10px' }} />
        <button
          style={{
            padding: "5px 10px",
            margin: "5px auto",
            border: "none",
            borderRadius: "8px",
            width: "45%",
            height: "50px",
          }}
        >
          {props.name}
        </button>
      </a>
    </li>
  );
};
export default CardList;