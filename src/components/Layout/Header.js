/* eslint-disable no-undef */
import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.title}>OrderMeals</h1>
        <HeaderCartButton onKlik={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A Table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
