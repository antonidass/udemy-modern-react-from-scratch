import Header from "./components/Layout/Header";
import React, { useState } from "react";
import MealList from "./components/Meal/MealList";
import PromoText from "./components/Meal/PromoText";
import Meals from "./components/Meal/Meals";
import CartContext from "./context/cart-context";

function App() {
  const [orderedItems, setOrderedItems] = useState([]);
  const [countAll, setCountAll] = useState(0);
  const [costAll, setCostAll] = useState(0);

  return (
    <CartContext.Provider
      value={{
        orderedItems,
        setOrderedItems,
        countAll,
        setCountAll,
        costAll,
        setCostAll,
      }}
    >
      <React.Fragment>
        <Header />
        <Meals />
      </React.Fragment>
    </CartContext.Provider>
  );
}

export default App;
