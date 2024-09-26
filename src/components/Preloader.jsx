// src/components/Preloader.js
import React from "react";
import "./Preloader.css"; // Add custom styles

function Preloader() {
  return (
    <div className="preloader">
      <video
        src="WELCOME TO.mp4"
        autoPlay
        loop
        muted
        className="responsive-video"
      />
    </div>
  );
}

export default Preloader;
