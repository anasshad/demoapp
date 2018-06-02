import React, { Component } from "react";
import { Container, Grid, Segment, Button, Icon } from "semantic-ui-react";

import Header from "./Header";
import Postbuttons from "./Postbuttons";
import Footer from "./Footer";
import Slideshow from "./Slideshow";
import Whatsonyourmind from "./Whatsonyourmind";
import Follow from "./Follow";
import Newsfeed from "./Newsfeed";
import Stars from "./Stars";
import Similar from "./Similar";
import About from "./About";
import Ratings from "./Ratings";
import CallToAction from "./CallToAction";
import Product from "./Product";
import MediaNews from "./MediaNews";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <br />
          <br />

          <Header />
          <Grid columns={2} stackable>
            <Grid.Row>
              <Grid.Column width={4}>
                <Follow />
                <Segment vertical>
                  <Stars rating={3} />
                </Segment>
                <Segment vertical>Product ABCD</Segment>
                <Button color="yellow" fluid>
                  View Deal
                </Button>
              </Grid.Column>
              <Grid.Column width={12}>
                <Slideshow />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <CallToAction />
                <Ratings />
                <Postbuttons />
                <br />
                <Whatsonyourmind />
              </Grid.Column>
              <Grid.Column>
                <About />
                <MediaNews />
                <Newsfeed />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Product />
          <Similar />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
