import React from "react";
import BackToHomeBtn from "../components/BackToHomeBtn";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "../components/sections/Card";
import Categories from "../components/sections/Categories";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Products from "../components/sections/Products";

import "../styles/App.css";
import "../styles/Button.css";
import "../styles/Product.css";
import "../styles/Category.css";
import "../styles/Contact.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <BackToHomeBtn />
      <Hero />
      <Categories />
      <Card />
      <Products />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Home;
