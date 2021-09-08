import React from "react";
import Card from "./Card";
import image1 from "../components/img/curso1.jpg";
import image2 from "../components/img/curso2.jpg";
import image3 from "../components/img/curso3.jpg";

const cards = [
  {
    id: 1,
    title: "Reballing",
    image: image1,
    url: "",
    text: "Nuestros técnicos están especializados y capacitados para reparar cualquier equipo que ingrese.",
  },
  {
    id: 2,
    title: "Revisión",
    image: image2,
    url: "",
    text: "Nuestros técnicos revisaran el equipo, teniendo muchos ingresos de equipos la revisión puede demorar.",
  },
  {
    id: 3,
    title: "Componentes",
    image: image3,
    url: "",
    text: "Venta de componentes electrónicos por mayor, (arduinos, leds, chips integrados, oled display, y mucho mas.)",
  },
];

export default function Cards() {
  return (
    <div>
      <div
        className="container p-4 justify-content-center align-items-center animate__animated"
        id="cards"
      >
        <div className="row">
          {cards.map((card) => (
            <div className="col-md-4" key={card.id}>
              <Card
                title={card.title}
                imageSource={card.image}
                texto={card.text}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
