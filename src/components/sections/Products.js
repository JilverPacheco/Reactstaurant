import React, { useState } from "react";
import Swal from "sweetalert2";

import ModalProduct from "../ModalProduct";
import { ProductData } from "../../data/ProductsData";

import { MdLocalOffer } from "react-icons/md";

const Products = () => {
  const [modal, setModal] = useState(false);
  const [actualProduct, setActualProduct] = useState(0);
  const [orderProduct, setOrderProduct] = useState([]);

  const handleProduct = (id) => {
    setModal(true);
    setActualProduct(id);
  };

  const addProduct = (id) => {
    setOrderProduct([...orderProduct, id]);
    Swal.fire({
      icon: "success",
      title: "Añadido exitosamente",
      timer: 1000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  return (
    <div className="container" id="menu">
      <div className="section-title">
        <div className="section-title-wrapper" data-aos="fade-up">
          <h3>Elige tu favorita</h3>
        </div>
      </div>
      <div
        className="product-container"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {ProductData.map((product) => (
          <div key={product.id} className="product-card">
            <span className="product-price">
              <MdLocalOffer />$ {product.price}
            </span>
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-desc">{product.description}</p>
            <button
              className="btn btn-primary-outline"
              onClick={() => handleProduct(product.id)}
            >
              Ver más
            </button>
            <button
              className="btn btn-order-outline"
              onClick={() => addProduct(product.id)}
            >
              Ordenar
            </button>
          </div>
        ))}
      </div>
      {modal && (
        <ModalProduct
          modal={modal}
          setModal={setModal}
          actualProduct={actualProduct}
        />
      )}
    </div>
  );
};

export default Products;
