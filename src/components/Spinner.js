import React from "react";

//takes in a message prop and displays a loading page with message
const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader"> {props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;
