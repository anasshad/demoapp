import React, { Component } from "react";
import { Image, Button, Grid } from "semantic-ui-react";

class Follow extends Component {
  render() {
    return (
      <Grid verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Image
              style={{ float: "left" }}
              src="https://placeimg.com/300/300/person"
              size="small"
              circular
              fluid
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <h2>Support Democrat</h2>
            <h3>@democrat</h3>
            <Button size="medium" primary>
              Follow
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Follow;
