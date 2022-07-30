import React from "react";
import FirstPicture from "../../Images/Main/1.png";
import SecondPicture from "../../Images/Main/2.png";
import ThirdPicture from "../../Images/Main/3.png";

export default function MainSection() {
  return (
    <section className="main__section">
      <div className="big__image-container">
        <img src={FirstPicture} alt="FirstPicture" />
      </div>
      <div className="small__pictures-container">
        <div className="small__picture">
          <img src={SecondPicture} alt="" />
        </div>
        <div className="small__picture">
          <img src={ThirdPicture} alt="" />
        </div>
      </div>
    </section>
  );
}
