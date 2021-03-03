import React from "react";
import { CategoriesData } from "../../data/CategoriesData";

const Categories = () => {
  return (
    <section className="category-container" id="categorias">
      <div className="section-title" data-aos="fade-up">
        <div className="section-title-wrapper">
          <h3>Nuestras categorias</h3>
        </div>
      </div>
      <div className="category-wrapper" data-aos="fade-up">
        {CategoriesData.map((category) => (
          <div className="category-card" key={category.id} data-aos="zoom-in">
            <div className="category-icon">{category.icon}</div>
            <h3 className="category-title">{category.name}</h3>
            <p className="category-desc">{category.desc}</p>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default Categories;
