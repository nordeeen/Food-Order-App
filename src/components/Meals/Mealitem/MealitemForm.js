import React, { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealitemForm.module.css";

const MealitemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("halo submit");

    const enteredAmount = amountInputRef.current.value;
    const enteredNumber = +enteredAmount;

    // checking
    if (
      enteredAmount.trim().length === 0 ||
      enteredNumber < 1 ||
      enteredNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredNumber);
    console.log(`number to Cart : ${enteredNumber}`);
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
        {!amountIsValid && <p>Please input your number (1-5)</p>}
      </form>
    </>
  );
};

export default MealitemForm;
