import React from "react";

export default function Card({ title, imageSource, texto }) {
  return (
    <div>
      <div className="card text-center bg-dark m-2">
        <div className="overflow ">
          <img src={imageSource} alt="" className="card-img-top" />
        </div>
        <div className="card-body text-light">
          <h4 className="card-title text-center ">{title}</h4>
          <p className="card-text">{texto}</p>
          <a href="#!" className="btn btn-outline-light btn-lg">
            Proximamente
          </a>
        </div>
      </div>
    </div>
  );
}
