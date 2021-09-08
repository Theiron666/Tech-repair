import React from "react";
import abimg from "../img/About.jpg";
import fb from "../img/facebook.svg";
import ig from "../img/instagram.svg";

export default function About() {
  return (
    <div className="about">
      <img src={abimg} alt="" />
      <div className="caption jumbotron-fluid text-center">
        <h1 className="title">Tech Repair</h1>
        <h2 className="content animate__animated animate__fadeIn">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero odio,
          nam non unde quisquam porro aperiam aut tempora, velit quae expedita
          perspiciatis dolores. Lorem ipsum, dolor sit amet consectetur Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Vero odio, nam non
          unde quisquam porro aperiam aut tempora, velit quae expedita
          perspiciatis dolores. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Vero odio, nam non unde quisquam porro aperiam aut tempora,
          velit quae expedita perspiciatis dolores. Lorem ipsum, dolor sit amet
          consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Vero odio, nam non unde quisquam porro aperiam aut tempora, velit quae
          expedita perspiciatis dolores. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Vero odio, nam non unde qis architecto labore
          cupiditate obcaecati recusandae iure amet sed exercitationem tenetur
          rerum cum illo delectus aliquam quasi necessitatibus, Vero odio, nam
          non unde qis architecto labore cupiditate obcaecati recusandae iure
          amet sed exercitationem tenetur rerum cum illo delectus aliquam quasi
          necessitatibusVero odio, nam non unde qis architecto labore cupiditate
          obcaecati recusandae iure amet sed exercitationem tenetur rerum cum
          illo delectus aliquam quasi necessitatibusVero odio, nam non unde qis
          architecto labore cupiditate obcaecati recusandae iure amet sed
          exercitationem tenetur rerum cum illo delectus aliquam quasi
          necessitatibustempore doloremque repellendus nam ducimus ipsam qui.
        </h2>
      </div>
      <div className="social">
        <h2>Seguinos en las redes Sociales</h2>
        <div className="icon animate__animated animate__rubberBand">
          <a href="https://www.facebook.com/">
            <img src={fb} alt="facebook" />
          </a>
          <a href="https://www.instagram.com">
            <img src={ig} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}
