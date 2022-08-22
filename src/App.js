import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  // passing click antar component
  const showCartHandler = () => {
    setCartIsShown(true);
    console.log("succes click 1");
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
    console.log("succes click 2");
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
