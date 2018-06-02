import React from "react";
import { Grid, Progress } from "semantic-ui-react";
import Stars from "./Stars";

class Ratings extends React.Component {
  render() {
    return (
      <div className="Ratings">
        1.5k Reviews from our community
        <hr />
        <Grid divided centered relaxed>
          <Grid.Row>
            <Grid.Column width={8}>
              <div>
                5 Stars
                <Progress percent={100} color="green" />
              </div>
              <div>
                4 Stars<Progress percent={80} color="green" />
              </div>
              <div>
                3 Stars<Progress percent={60} color="green" />
              </div>
              <div>
                2 Stars<Progress percent={40} color="green" />
              </div>
              <div>
                1 Stars<Progress percent={20} color="green" />
              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <div className="ratings-star-container">
                Service <Stars rating={5} />
              </div>
              <div className="ratings-star-container">
                Value <Stars rating={4} />
              </div>
              <div className="ratings-star-container">
                Shipping <Stars rating={3} />
              </div>
              <div className="ratings-star-container">
                Return <Stars rating={2} />
              </div>
              <div className="ratings-star-container">
                Quantity <Stars rating={1} />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Ratings;
