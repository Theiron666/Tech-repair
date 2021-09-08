import React from "react";
import banner from "../components/img/banner.mp4";

export default function Home() {
  return (
    <div id="banner">
      <div className="texture"></div>
      <video
        loop
        muted
        autoPlay
        preload="auto"
        src={banner}
        type="video/mp4"
      ></video>
      <div className="caption jumbotron-fluid text-center">
        <h1 className="display-2 animate__animated animate__zoomInDown">
          Tech Repair
        </h1>
        <h2 className="display-6 animate__animated animate__backInLeft">
          Unicos en contar con las últimas herramientas y Técnicos
          especializados.
        </h2>
      </div>
    </div>
  );
}
