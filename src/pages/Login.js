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
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
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
        title: "¡Ingreso satisfactorio!",
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
    >
      <div className="auth-left-wrapper login">
        <Link to="/" className="back-link">
          <TiArrowLeftThick />
        </Link>
      </div>

      <div className="auth-right-wrapper">
        <motion.form
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <h2>
            Reactstaurant&nbsp;
            <IoRestaurantOutline style={{ fontSize: "25px" }} />
          </h2>

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
          <div className="btn-wrapper">
            <button className="btn-wide btn-primary" onClick={handleSubmit}>
              Inicia sesion
            </button>
          </div>
          <div className="redirect">
            ¿Aún no tienes una cuenta?
            <Link to="/registro" className="link">
              Registrate
            </Link>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Register;
