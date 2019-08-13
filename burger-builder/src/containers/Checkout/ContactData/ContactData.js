import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import "./ContactData.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Name"
        },
        value: "",
        validation: {
          required: true
        },
        isValid: false,
        touched: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street"
        },
        value: "",
        validation: {
          required: true
        },
        isValid: false,
        touched: false
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Postal"
        },
        value: "",
        validation: {
          required: true
        },
        isValid: false,
        touched: false
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country"
        },
        value: "",
        validation: {
          required: true
        },
        isValid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email"
        },
        value: "",
        validation: {
          required: true
        },
        isValid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        validation: {},
        value: "fastest",
        isValid: true
      }
    },
    loading: false,
    formIsValid: false
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    return isValid;
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formDataIdentifier in this.state.orderForm) {
      formData[formDataIdentifier] = this.state.orderForm[
        formDataIdentifier
      ].value;
    }

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      order: formData
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(err => this.setState({ loading: false }));
  };

  inputChangedHandler = (event, inputIdentifier) => {
    console.log("event", event.target.value);
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.isValid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;

    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].isValid && formIsValid;
    }

    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };

  render() {
    let formsElementArray = [];
    for (let key in this.state.orderForm) {
      formsElementArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formsElementArray.map(formElement => (
          <Input
            label={formElement.id}
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={event => this.inputChangedHandler(event, formElement.id)}
            valid={!formElement.config.isValid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
          />
        ))}
        <Button
          btnType="Success"
          disabled={!this.state.formIsValid}
          clicked={this.orderHandler}
        >
          ORDER
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
