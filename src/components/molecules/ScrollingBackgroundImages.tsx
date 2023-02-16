import React from "react";
import BackgroundImage from "./../atoms/BackGroundImage";

const images = ["./../asset/FrontView.jpg", "./../asset/MainBoard.jpg"];

const ScrollingBackgroundImages = () => (
  <div style={{ overflowX: "hidden", overflowY: "auto" }}>
    {images.map((image, index) => (
      <BackgroundImage
        key={index}
        image={image}
        style={{ backgroundAttachment: "fixed", backgroundSize: "cover" }}
      />
    ))}
  </div>
);

export default ScrollingBackgroundImages;
