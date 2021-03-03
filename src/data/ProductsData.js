import Hamburgesa_tradicional from "../images/products/hamburgesa-tradicional.jpg";
import Hamburgesa_picante from "../images/products/hamburgesa-picante.jpg";
import Hot_dog_tradicional from "../images/products/hot-dog-tradicional.jpg";
import Pizza_rojita from "../images/products/pizza-rojita.jpg";
import Pizza_vegetal from "../images/products/pizza-vegetal.jpg";

export const ProductData = [
  {
    id: 1,
    category: "hamburgesa",
    name: "Hamburgesa tradicional",
    price: 3.99,
    image: Hamburgesa_tradicional,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus ligula vitae nulla scelerisque lobortis et ut velit. Etiam tincidunt tincidunt lorem, vel semper mauris condimentum vel.",

    ingredients: [
      "Papas a la francesa",
      "200gr carne molida",
      "Lechuga",
      "Tomate",
      "Cebolla",
    ],
  },
  {
    id: 2,
    category: "hamburgesa",
    name: "Hamburgesa picante",
    price: 5.99,
    image: Hamburgesa_picante,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus ligula vitae nulla scelerisque lobortis et ut velit. Etiam tincidunt tincidunt lorem, vel semper mauris condimentum vel.",

    ingredients: [
      "Papas a la francesa",
      "250gr Carne picante",
      "Chile picante",
      "Lechuga",
      "Tomate",
      "Cebolla",
    ],
  },
  {
    id: 3,
    category: "hot-dog",
    name: "Hot dog tradicional",
    price: 4.99,
    image: Hot_dog_tradicional,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus ligula vitae nulla scelerisque lobortis et ut velit. Etiam tincidunt tincidunt lorem, vel semper mauris condimentum vel.",

    ingredients: ["Papas a la francesa", "Salchicha", "Salsa tartara"],
  },
  {
    id: 4,
    category: "pizza",
    name: "Pizza rojita",
    price: 3.99,
    image: Pizza_rojita,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus ligula vitae nulla scelerisque lobortis et ut velit. Etiam tincidunt tincidunt lorem, vel semper mauris condimentum vel.",
    ingredients: ["Tomate", "Pimenton", "Peperoni", "Champiñones"],
  },
  {
    id: 5,
    category: "pizza",
    name: "Pizza vegetal",
    price: 3.99,
    image: Pizza_vegetal,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus ligula vitae nulla scelerisque lobortis et ut velit. Etiam tincidunt tincidunt lorem, vel semper mauris condimentum vel.",
    ingredients: ["Lechuga fresca", "Champiñones", "Tomate"],
  },
];
