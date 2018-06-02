import React from "react";
import { Segment, Icon, Button } from "semantic-ui-react";

const CallToAction = () => (
  <Segment style={{ float: "left", background: "#ddd" }}>
    <Icon
      style={{ float: "left" }}
      name="announcement"
      size="large"
      color="red"
    />
    <div style={{ float: "left", width: "50%", marginLeft: "10px" }}>
      Call to action custom message exmaple click to visit our site.
    </div>
    <Button color="red" floated="right">
      View Now
    </Button>
  </Segment>
);

export default CallToAction;
