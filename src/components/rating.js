import React from "react";
import { Dropdown, Form, Button, Header, Card, Grid } from "semantic-ui-react";

const options = [
  { key: "1 Star", text: "★", value: "1" },
  { key: "2 Star", text: "★★", value: "2" },
  { key: "3 Star", text: "★★★", value: "3" },
  { key: "4 Star", text: "★★★★", value: "4" }
];

class Rating extends React.Component {
  //calls the  nextStep  function from home.js
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  //calls the  prevStep  function from home.js
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  //renders a fuild dropdown wrapped  in a grid and a card from semantic-ui
  render() {
    const { values } = this.props;
    return (
      <Grid
        verticalAlign="middle"
        centered
        style={{ height: "25vh", marginTop: "25vh" }}
      >
        <Card>
          <Card.Header as="h1" textAlign="center">
            Select Data
          </Card.Header>
          <Card.Content>
            <Form color="green">
              <Header as="h2" style={{ marginTop: "15%" }}>
                Select Rating Range:
              </Header>
              <Dropdown
                style={{ marginTop: "25%" }}
                onChange={this.props.handleChange("rating_min")}
                label="Restaurant Rating - Minimum"
                selection
                fluid
                search
                options={options}
                values={values}
                placeholder="Minimum Rating"
              />
              <Dropdown
                style={{ marginTop: "10px" }}
                onChange={this.props.handleChange("rating_max")}
                label="Restaurant Rating - Maximum"
                selection
                fluid
                search
                options={options}
                values={values}
                placeholder="Maximum Rating"
              />

              <Button
                onClick={this.saveAndContinue}
                style={{ marginTop: "10px" }}
              >
                Next
              </Button>
            </Form>
          </Card.Content>
        </Card>
      </Grid>
    );
  }
}

export default Rating;
