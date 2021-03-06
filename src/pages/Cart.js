import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
    >
      <h1>Cart Component</h1>
      <Link to="/">Volver al inicio</Link>

    </motion.div>
  );
};

export default Cart;
