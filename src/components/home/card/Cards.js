import React from 'react';
import './Cards.css';
import CardList from './CardList';
import { img4, img8, img9 } from '../../../assets';

function Cards() {
  return (
    <div className='cards'>
      <h1 style={{textAlign: "Center", marginBottom: "50px"}}>Main Course</h1>
      <div>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <CardList
            path="/about"
            img={img8}
            alt="alternative desc"
            name="About Us"
          />
          <CardList
            path="/media"
            img={img9}
            alt="alternative desc"
            name="Layanan"
          />
          <CardList
            path="/whistleblowing"
            img={img9}
            alt="alternative desc"
            name="Hubungi Kami"
          />
        </ul>
      </div>
    </div>
  );
}

export default Cards;
