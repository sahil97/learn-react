import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentWillUpdate(prevProps, prevState, snapshot) {
    console.log("WillUpdate");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3> Your Order </h3>
        <p> Burger with following items </p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price}</strong>
        </p>
        <Button clicked={this.props.purchaseCancelled} btnType="Danger">
          {" "}
          CANCEL{" "}
        </Button>
        <Button clicked={this.props.purchaseContinue} btnType="Success">
          {" "}
          CONTINUE{" "}
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
