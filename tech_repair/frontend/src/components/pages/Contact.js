import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [error, setError] = useState("Complete el formulario");
  const [sent, setSent] = useState(false);

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name === "" || mail === "" || message === "") {
      alert(error);
    } else {
      try {
        await axios.post("https://backend-tech-repair.herokuapp.com/api/sendmail", {
          name,
          mail,
          message,
        });
        setSent(true);
        setError("");
      } catch (err) {
        setError(err.response.data);
      }

      if (sent === true) {
        alert("Mensaje Enviado!");
      } else {
      }
    }
    setName("");
    setMail("");
    setMessage("");
  };

  return (
    <div className="container-contact100" id="contact">
      <div className="wrap-contact100">
        <form onSubmit={handleSubmit} className="contact100-form validate-form">
          <span
            className="contact100-form-title animate__animated "
            id="scroll-cont"
          >
            Contacta con nosotros!
          </span>
          <div
            className="wrap-input100 validate-input"
            data-validate="Name is required"
          >
            <span className="label-input100">Nombre</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input100"
              type="text"
              name="name"
              placeholder="Ingrese su nombre"
            />
            <span className="focus-input100"></span>
          </div>

          <div
            className="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <span className="label-input100">Email</span>
            <input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className="input100"
              type="text"
              name="email"
              placeholder="Ingrese su email"
            />
            <span className="focus-input100"></span>
          </div>
          <div
            className="wrap-input100 validate-input"
            data-validate="Message is required"
          >
            <span className="label-input100">Mensaje</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input100"
              name="message"
              placeholder="Ingrese su mensaje..."
            ></textarea>
            <span className="focus-input100"></span>
          </div>

          <div className="container-contact100-form-btn">
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-primary" type="submit">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
