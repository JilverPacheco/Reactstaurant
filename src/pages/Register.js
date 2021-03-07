import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { TiArrowLeftThick } from "react-icons/ti";
import { IoRestaurantOutline } from "react-icons/io5";

import "../styles/Auth.css";
import "../styles/Button.css";
import Swal from "sweetalert2";

const Register = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, last_name, email, password, password2 } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      last_name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      password2.trim() === ""
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
        title: "¡Registro satisfactorio!",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };
  return (
    <motion.section
      className="auth-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}

    >
      <div className="auth-left-wrapper register">
        <Link to="/" className="back-link">
          <TiArrowLeftThick />
        </Link>
      </div>

      <div className="auth-right-wrapper">
        <motion.form
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}

        >
          <h2>
            Reactstaurant&nbsp;
            <IoRestaurantOutline style={{ fontSize: "25px" }} />
          </h2>
          <div className="input-wrapper">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="last_name">Apellidos</label>
            <input
              type="text"
              name="last_name"
              value={last_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password2">Confirmar contraseña</label>
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={handleInputChange}
            />
          </div>
          <div className="btn-wrapper">
            <button className="btn-wide btn-primary" onClick={handleSubmit}>
              Registrarse
            </button>
          </div>
          <div className="redirect">
            ¿Ya posees una cuenta?
            <Link to="/ingreso" className="link">
              Inicia sesión
            </Link>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Register;
