import React, { Component } from "react";
import { Image, TextArea, Form, Grid } from "semantic-ui-react";

class Whatsonyourmind extends Component {
  render() {
    return (
      <Form>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={4}>
              <Image
                src="https://placeimg.com/300/300/person"
                size="tiny"
                circular
              />
            </Grid.Column>
            <Grid.Column width={12}>
              <TextArea placeholder="What's on your mind" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

export default Whatsonyourmind;
