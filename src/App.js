import Layout from "./components/Layout";
import Hero from "./components/sections/Hero";
import Products from "./components/sections/Products";
import Categories from "./components/sections/Categories";
import Contact from "./components/sections/Contact";

import "./styles/App.css";
import "./styles/Button.css";
import "./styles/Product.css";
import "./styles/Category.css";
import "./styles/Contact.css";
import BackToHomeBtn from "./components/BackToHomeBtn";
import Card from "./components/sections/Card";

function App() {
  return (
    <Layout>
      <BackToHomeBtn/>
      <Hero />
      <Categories />
      <Card/>
      <Products />
      <Contact />
    </Layout>
  );
}

export default App;
