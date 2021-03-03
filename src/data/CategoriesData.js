import React from "react";
import { FaHotdog } from "react-icons/fa";
import { GiHamburger, GiFrenchFries, GiFullPizza } from "react-icons/gi";

export const CategoriesData = [
  {
    id: 1,
    name: "Hamburgesa",
    icon: <GiHamburger />,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus ligula vitae nulla scelerisque lobortis et ut velit. Etiam tincidunt tincidunt lorem, vel semper mauris condimentum vel.",
  },
  {
    id: 2,
    name: "Hot dogs",
    icon: <FaHotdog />,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus ligula vitae nulla scelerisque lobortis et ut velit. Etiam tincidunt tincidunt lorem, vel semper mauris condimentum vel.",
  },
  {
    id: 3,
    name: "Pizza",
    icon: <GiFullPizza />,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus ligula vitae nulla scelerisque lobortis et ut velit. Etiam tincidunt tincidunt lorem, vel semper mauris condimentum vel.",
  },
  {
    id: 4,
    name: "Papas fritas",
    icon: <GiFrenchFries />,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus ligula vitae nulla scelerisque lobortis et ut velit. Etiam tincidunt tincidunt lorem, vel semper mauris condimentum vel.",
  },
];
