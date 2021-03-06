import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = ({ location }) => {
  return (
    <div>
      <h1>No match the location {location.pathname}</h1>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFoundPage;
