import React from "react";
import { Dropdown, Form, Button, Header, Card, Grid } from "semantic-ui-react";

const options = [
  { key: "1", text: "1 Mile", value: "1" },
  { key: "2", text: "2 Miles", value: "2" },
  { key: "3", text: "3 Miles", value: "3" },
  { key: "4", text: "4 Miles", value: "4" },
  { key: "5", text: "5 Miles", value: "5" },
  { key: "10", text: "10 Miles", value: "10" },
  { key: "15", text: "15 Miles", value: "15" },
  { key: "20", text: "20 Miles", value: "20" }
];

class Radius extends React.Component {
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
                Radius to Food:
              </Header>
              <Dropdown
                style={{ marginTop: "25%" }}
                onChange={this.props.handleChange("radius")}
                label="Radius to Food"
                selection
                fluid
                search
                options={options}
                values={values}
                placeholder="Radius in Miles"
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

export default Radius;
