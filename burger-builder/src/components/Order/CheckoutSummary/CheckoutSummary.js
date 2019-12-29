import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import "./checkoutSummary.css";

const checkoutSummary = props => {
  return (
    <div className="CheckoutSummary">
      <h1> Tastes Well</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.onCheckoutCancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.onCheckoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;