import React from "react";

import Card from "../UI/Card";
import Mealitem from "./Mealitem/Mealitem";
import classes from "./AvailableMeals.module.css";

// data dummy
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

//=================================//

const AvailableMeals = () => {
  const meatList = DUMMY_MEALS.map((meal) => (
    <Mealitem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <>
      <section className={classes.meals}>
        <Card>
          <ul>{meatList}</ul>
        </Card>
      </section>
    </>
  );
};

export default AvailableMeals;
