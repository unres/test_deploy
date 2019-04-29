import React from "react";
import { Dropdown, Form, Button, Header, Card, Grid } from "semantic-ui-react";

const options = [
  { key: "1", text: "$", value: "1" },
  { key: "2", text: "$$", value: "2" },
  { key: "3", text: "$$$", value: "3" },
  { key: "4", text: "$$$$", value: "4" }
];

class Price extends React.Component {
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
                Select Price Range:
              </Header>
              <Dropdown
                style={{ marginTop: "25%" }}
                onChange={this.props.handleChange("price_min")}
                label="Price Range"
                selection
                fluid
                search
                options={options}
                values={values}
                placeholder="Select Minimum"
              />
              <Dropdown
                style={{ marginTop: "10px" }}
                onChange={this.props.handleChange("price_max")}
                label="Price Range"
                selection
                fluid
                search
                options={options}
                values={values}
                placeholder="Select Maximum"
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

export default Price;
