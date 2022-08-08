import { initStore } from "./store";

const productsList = [
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
];

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (currentState, productId) => {
      const prodIndex = currentState.products.findIndex(
        (prod) => prod.id === productId
      );
      const newFavStatus = !currentState.products[prodIndex].isFavorite;
      const updatedProducts = [...currentState.products];
      updatedProducts[prodIndex] = {
        ...currentState.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return { products: updatedProducts };
    },
  };
  initStore(actions, { products: productsList });
};

export default configureStore;
