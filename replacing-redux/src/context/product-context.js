import React, { createContext, useState } from "react";

const ProductContext = createContext({
  products: [],
  toggleFav: (id) => {},
});

export const ProductContextProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFavHandler = (productId) => {
    setProductsList((currentProductsList) => {
      const prodIndex = currentProductsList.findIndex(
        (prod) => prod.id === productId
      );
      const newFavStatus = !currentProductsList[prodIndex].isFavorite;
      const updatedProducts = [...currentProductsList];
      updatedProducts[prodIndex] = {
        ...currentProductsList[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  const productContextValue = {
    products: productsList,
    toggleFav: toggleFavHandler,
  };
  return (
    <ProductContext.Provider value={productContextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
