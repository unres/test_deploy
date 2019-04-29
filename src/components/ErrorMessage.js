import "../css/ErrorMessage.css";
import React from "react";

//Uses semantic UI to make a error message page that
//displays the error message to the user
const ErrorMessage = props => {
  return (
    <div className="ui active dimmer">
      <i className="massive x icon icon red" />
      <h1 className="style-text">{props.errorMessage}</h1>
    </div>
  );
};

ErrorMessage.props = {
  errorMessage: "Unknown Problem"
};

export default ErrorMessage;
