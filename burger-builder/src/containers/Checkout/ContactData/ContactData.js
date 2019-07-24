import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import "./ContactData.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Test 1",
        address: {
          street: "testStreet",
          zipCode: "123a",
          country: "India"
        }
      }
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(err => this.setState({ loading: false }));
  };

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="your Name" />
        <input type="email" name="email" placeholder="your email" />
        <input type="text" name="street" placeholder="your street" />
        <input type="text" name="postal" placeholder="your postal" />
        <Button btnType="Success" clicked={this.orderHandler}>
          {" "}
          ORDER{" "}
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4> Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
