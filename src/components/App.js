import React from "react";

import Home from "../components/home";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

class App extends React.Component {
  state = { lat: null, long: null, errorMessage: "" };

  //Function componentDidMount runs on loading of the  page.
  //Obtains the longitude and latitude from the users location and
  //Stores it into the state variables
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  //Function contains if statements to render the correct page per situation
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <ErrorMessage errorMessage={this.state.errorMessage} />;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <Home lat={this.state.lat} long={this.state.long} />;
    }

    return <Spinner message="Please Accept Location Request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default App;
