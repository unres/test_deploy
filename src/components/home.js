import React from "react";

import Type from "../components/type";
import Radius from "../components/radius";
import Price from "../components/price";
import Rating from "../components/rating";
import Spinner from "../components/Spinner";

import "../css/App.css";

class Home extends React.Component {
  state = {
    step: 1,
    type: "",
    radius: "",
    price_min: "",
    price_max: "",
    rating_min: "",
    rating_max: "",
    long: this.props.lat,
    lat: this.props.long
  };

  //Fucntion Increments the state variable by 1
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      ...this.state,
      step: step + 1
    });
  };

  //Fucntion decrements the state  variable by 1
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      ...this.state,
      step: step - 1
    });
  };

  //Function changes assignes values to the given state variables from other components
  handleChange = input => (e, { value }) => this.setState({ [input]: value });

  //In Render, uses a switch case to go back and forth from different component views
  render() {
    const { step } = this.state;
    const {
      type,
      radius,
      price_min,
      price_max,
      rating_min,
      rating_max,
      long,
      lat
    } = this.state;
    const values = {
      type,
      radius,
      price_min,
      price_max,
      rating_min,
      rating_max,
      long,
      lat
    };
    switch (step) {
      case 1:
        return (
          <Type
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Radius
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Price
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Rating
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return <Spinner message="Generating a Place to Eat" />;
      default:
        return <Spinner message="Something went really wrong" />;
    }
  }
}

export default Home;
