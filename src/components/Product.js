import React from "react";
import {
  Grid,
  Breadcrumb,
  Segment,
  Button,
  Input,
  Icon,
  Rating
} from "semantic-ui-react";

class Product extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#eee",
          padding: "0px 20px",
          marginBottom: "20px"
        }}
      >
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={10}>
              <Breadcrumb>
                <Breadcrumb.Section link>USA</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section link>California</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section link>Sunnyvale</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>Travel</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>Hotels</Breadcrumb.Section>
              </Breadcrumb>
              <h1>Support Democra</h1>
              <h3>
                Product description goes here limited to Seventy characters.
              </h3>
              <Segment textAlign="center" inverted padded="very">
                <div>
                  <Button color="green">Add to Cart - $19</Button>
                  <Input type="number" />
                  <span style={{ marginLeft: "10px" }}>$513 96% off</span>
                </div>
                <div>
                  <span>
                    <Icon name="clock" />Ending In : 4 Hours
                  </span>
                  <span>
                    <Icon name="heart" />Wishlist
                  </span>
                  <span>
                    <Rating icon="star" defaultRating={5} maxRating={5} />(453)
                  </span>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column width={6} textAlign="center">
              <h2>Appointments 866.588.2264</h2>
              <Button color="orange" fluid style={{ marginBottom: "5px" }}>
                APPOINTMENTS AND LOCATIONS
              </Button>
              <Button fluid style={{ marginBottom: "5px" }}>
                CHAT WITH A REPRESENTATIVE
              </Button>
              <Button fluid style={{ marginBottom: "5px" }}>
                CONTACT US
              </Button>
              <Button color="blue" circular icon>
                <Icon name="facebook f" />
              </Button>
              <Button circular icon color="pink">
                <Icon name="instagram" />
              </Button>
              <Button circular icon color="">
                <Icon name="twitter" />
              </Button>
              <Button circular icon color="purple">
                <Icon name="linkedin" />
              </Button>
              <Button circular icon color="yellow">
                <Icon name="envelope" />
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Product;
