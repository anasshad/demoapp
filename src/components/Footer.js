import React, { Component } from "react";
import {
  Segment,
  Container,
  Grid,
  List,
  Header,
  Divider,
  Image
} from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <Segment
        vertical
        style={{
          margin: "5em 0em 0em",
          padding: "5em 0em",
          background: "#ccc"
        }}
      >
        <Container textAlign="center">
          <Divider section />
          <List horizontal divided link>
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
