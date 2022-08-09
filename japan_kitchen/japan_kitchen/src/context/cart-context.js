import React from "react";

const CartContext = React.createContext({
  orderedItems: [],
  setOrderedItems: () => {},
  countAll: 0,
  setCountAll: () => {},
  costAll: 0,
  setCostAll: () => {},
});

export default CartContext;
