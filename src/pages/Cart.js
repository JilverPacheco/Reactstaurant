import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TiArrowLeftThick } from "react-icons/ti";
import "../styles/Cart.css";
import { ProductData } from "../data/ProductsData";

const Cart = () => {
  return (
    <motion.div
      className="cart-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link to="/">
        <TiArrowLeftThick />
      </Link>

      <motion.table
        className="cart-table"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        exit={{ y: 60 }}
        transition={{ duration: 1 }}
      >
        <tr>
          <th className="cart-title cart-quantity">Cantidad</th>
          <th className="cart-title cart-name">Nombre</th>
          <th className="cart-title cart-price">Precio</th>
        </tr>
        {ProductData.map((product) => (
          <tr>
            <td className="cart-desc">{product.id}</td>
            <td className="cart-desc">{product.name}</td>
            <td className="cart-desc">{product.price}</td>
          </tr>
        ))}
      </motion.table>
    </motion.div>
  );
};

export default Cart;
