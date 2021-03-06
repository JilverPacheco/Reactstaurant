import React, { Fragment, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Aos from "aos";

import Header from "./Header";
import Footer from "./Footer";

import "../styles/App.css";
import "aos/dist/aos.css";

const Layout = ({ children }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Fragment>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className="global-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </Fragment>
  );
};

export default Layout;
