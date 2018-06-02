import React from "react";
import { Segment, Grid, Icon, Image, Button } from "semantic-ui-react";

class MediaNews extends React.Component {
  render() {
    return (
      <div style={{ background: "#ddd", padding: "10px" }}>
        <h1>MediaNews</h1>
        <Segment textAlign="center" style={{ width: "99%" }}>
          <strong>
            See what your friends are saying about the McAlister's Deli.
          </strong>
          <br />
          By Creating an account you are able to follow friends and experts you
          trust and see the places they've recommanded.
          <br />
          <div>
            <Button color="blue">
              <Icon name="facebook f" />Sign up with Facebook
            </Button>
            <Button color="gray">
              <Icon name="envelope" />Sign up with Email
            </Button>
          </div>
        </Segment>
      </div>
    );
  }
}

export default MediaNews;
