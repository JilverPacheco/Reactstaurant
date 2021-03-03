import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { AiOutlineClose } from "react-icons/ai";

import { ProductData } from "../data/ProductsData";

const ModalProduct = ({ setModal, actualProduct }) => {
  const data = ProductData.filter((product) => product.id === actualProduct);

  const { name, description, image, price, ingredients } = data[0];
  return (
    <AnimatePresence>
      <motion.div
        className="product-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="modal"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ y: 20 }}
        >
          <div className="close-modal" onClick={() => setModal(false)}>
            <AiOutlineClose style={{ color: "#000" }} />
          </div>
          <span className="modal-price">$ {price}</span>
          <h3 className="modal-name">{name}</h3>
          <img className="modal-image" src={image} alt={name} />
          <h3 className="modal-title-ingredient">Ingredientes</h3>
          <ul className="modal-ingredients-wrapper">
            {ingredients &&
              ingredients.map((ingredient, index) => (
                <li className="modal-ingredients" key={index}>
                  {ingredient}
                </li>
              ))}
          </ul>
          <p className="modal-desc">{description}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalProduct;
