import React from "react";
import { Segment, Grid, Icon, Image } from "semantic-ui-react";

class About extends React.Component {
  render() {
    return (
      <div style={{ background: "#ddd", padding: "10px" }}>
        <h1>About</h1>
        <Segment style={{ width: "99%" }}>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <h3 style={{ color: "orange" }}>
                  <Icon name="square" color="orange" />Closed Now
                </h3>
                <p>Today: 11:00 AM - 11:00 PM Tommorow: 11:00 AM - 09:30 PM</p>
                <div>
                  <span
                    style={{
                      background: "black",
                      color: "white",
                      padding: "2px",
                      borderRadius: "10%"
                    }}
                  >
                    13
                  </span>{" "}
                  years in Business
                </div>
              </Grid.Column>
              <Grid.Column>
                <div>
                  <Image
                    floated="left"
                    src="https://placeimg.com/70/70/nature"
                  />Traveler's Choice 2017 Winner
                </div>
                <div style={{ clear: "both" }}>Recommanded to a Friend</div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default About;
