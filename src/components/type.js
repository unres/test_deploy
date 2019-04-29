import React from "react";
import { Dropdown, Form, Button, Header, Card, Grid } from "semantic-ui-react";

//All the options for the  dropdown
const options = [
  { key: "American", text: "American", value: "american" },
  { key: "Chinese", text: "Chinese", value: "chinese" },
  { key: "Greek", text: "Greek", value: "greek" },
  { key: "Japanese", text: "Japanese", value: "japanese" },
  { key: "Korean", text: "Korean", value: "korean" },
  { key: "Indian", text: "Indian", value: "indian" }
];

class Type extends React.Component {
  //calls the  nextStep  function from home.js
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
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
                Type of Food:
              </Header>
              <Dropdown
                style={{ marginTop: "25%" }}
                onChange={this.props.handleChange("type")}
                selection
                multiple
                fluid
                search
                options={options}
                values={values}
                placeholder="Type of Food"
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

export default Type;
