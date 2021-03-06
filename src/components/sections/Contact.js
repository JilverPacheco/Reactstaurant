import React from "react";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";

const Contact = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    identification: "",
    email: "",
    contact_phone: "",
    people_number: "",
    festivity_type: "",
    date: "",
    hour: "",
  });

  const {
    name,
    identification,
    email,
    contact_phone,
    people_number,
    festivity_type,
    date,
    hour,
  } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      identification.trim() === "" ||
      email.trim() === "" ||
      people_number.trim() === "" ||
      festivity_type.trim() === "" ||
      date.trim() === "" ||
      hour.trim() === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Ops, hubo un error",
        text: "Por favor llena todos los campos.",
        timer: 3000,
        timerProgressBar: true,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Enviado satisfactoriamente!",
        text: "Muy pronto nos comunicaremos contigo para agendar detalles",
        timer: 3000,
        timerProgressBar: true,
      });
    }
  };

  return (
    <section className="contact-container" id="contacto">
      <div className="contact-wrapper">
        <form className="form-container" data-aos="zoom-in">
          <h2>Agendemos tu reserva</h2>

          <div className="input-wrapper">
            <label htmlFor="name">Nombre</label>
            <input
              name="name"
              type="text"
              autoComplete="off"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="identification">Numéro de identificación</label>
            <input
              name="identification"
              type="number"
              autoComplete="off"
              value={identification}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="contact_phone">Telefono de contacto</label>
            <input
              name="contact_phone"
              type="number"
              autoComplete="off"
              value={contact_phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="people_number">Numéro de personas</label>
            <input
              name="people_number"
              type="number"
              autoComplete="off"
              value={people_number}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper select">
            <label htmlFor="festivity_type">Tipo de festividad</label>
            <select
              name="festivity_type"
              value={festivity_type}
              onChange={handleInputChange}
            >
              <option value="Cumpleaños">Cumpleaños</option>
              <option value="Compartir">Compartir</option>
              <option value="Fiesta-amigos">Fiesta de amigos</option>
              <option>Otro</option>
            </select>
          </div>
          <div className="input-wrapper">
            <label htmlFor="date">Fecha</label>
            <input
              name="date"
              type="date"
              value={date}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="hour">Hora</label>
            <input
              name="hour"
              type="time"
              value={hour}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-wrapper btn-form ">
            <button className="btn-wide btn-primary" onClick={handleSubmit}>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
