import React, { useEffect, useState } from "react";
import background from "./assets/images/bg-team.jpg";
import logo from "./assets/images/gdg.svg";
import "./App.css";

// Import all images
import leftCard1 from "./assets/images/1.jpg";
import leftCard2 from "./assets/images/2.png";
import leftCard3 from "./assets/images/3.jpg";
import leftCard4 from "./assets/images/4.png";
import leftCard5 from "./assets/images/5.jpg";
import leftCard6 from "./assets/images/6.png";

import rightCard1 from "./assets/images/1.jpg";
import rightCard2 from "./assets/images/2.png";
import rightCard3 from "./assets/images/3.jpg";
import rightCard4 from "./assets/images/4.png";
import rightCard5 from "./assets/images/5.jpg";
import rightCard6 from "./assets/images/6.png";

// Define perspective positions
const leftPerspectives = [
  { x: -10, z: -4 },
  { x: -20, z: -8 },
  { x: -30, z: -12 },
  { x: -40, z: -16 },
  { x: -50, z: -20 },
  { x: 10, z: -4 },
];

const rightPerspectives = [
  { x: 10, z: -4 },
  { x: 20, z: -8 },
  { x: 30, z: -12 },
  { x: 40, z: -16 },
  { x: 50, z: -20 },
  { x: -10, z: -4 },
];

const leftImages = [
  leftCard1,
  leftCard2,
  leftCard3,
  leftCard4,
  leftCard5,
  leftCard6,
];
const rightImages = [
  rightCard1,
  rightCard2,
  rightCard3,
  rightCard4,
  rightCard5,
  rightCard6,
];

const Card = ({ side, index, counter }) => {
  const perspectives = side === "left" ? leftPerspectives : rightPerspectives;
  const images = side === "left" ? leftImages : rightImages;
  const { x, z } = perspectives[(counter + index) % 6];

  return (
    <img
      className="item"
      src={images[index]}
      style={{ transform: `translate3d(${x}rem, 0, ${z}rem)` }}
      alt={`${side} card ${index + 1}`}
    />
  );
};

const Gallery = ({ side, counter }) => {
  return (
    <div className={side}>
      <div className="inner">
        {[...Array(6)].map((_, index) => (
          <Card key={index} side={side} index={index} counter={counter} />
        ))}
      </div>
    </div>
  );
};

const ImageGallery = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % 6);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div className="header font-bold text-white text-lg flex items-center">
        <img className="w-12 h-12 logo" src={logo} alt="GDG Logo" />
        <h1 className="font-bold ml-4 logo-text">GDG on Campus - SIMATS</h1>
      </div>

      {/* Gallery */}
      <div className="gallery">
        <Gallery side="left" counter={counter} />
        <Gallery side="right" counter={counter} />
      </div>

      {/* Integrated Text Section */}
      <div className="integrated-text text-white">
        <p>
          <span className="text-xl font-semibold">GDG - SIMATS</span>
          <br />
          Cras eu dignissim mauris. Duis imperdiet erat sapien, molestie aliquet
          arcu tincidunt id. Mauris sit amet quam mi. Duis porttitor lectus quis
          turpis malesuada, eu luctus elit dignissim.
        </p>
        <hr />
      </div>
    </div>
  );
};

export default ImageGallery;
