import React from "react";
import { Grid, Card, Icon, Image, Button } from "semantic-ui-react";
import Stars from "./Stars";

const SimilarCard = ({ image, name, rating, text, price }) => (
  <Card>
    <Image src={image} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <Stars rating={rating} />
      </Card.Meta>
      <Card.Description>{text}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button>{price}</Button>
    </Card.Content>
  </Card>
);

class Similar extends React.Component {
  render() {
    return (
      <Grid>
        <h1>Similar Hotels</h1>
        <Grid.Row columns={3}>
          <Grid.Column>
            <SimilarCard
              name="Name"
              image="https://placeimg.com/300/300/nature"
              rating={3}
              text="Some description"
              price="$350"
            />
          </Grid.Column>
          <Grid.Column>
            <SimilarCard
              name="Name"
              image="https://placeimg.com/300/300/nature"
              rating={3}
              text="Some description"
              price="$350"
            />
          </Grid.Column>
          <Grid.Column>
            <SimilarCard
              name="Name"
              image="https://placeimg.com/300/300/nature"
              rating={3}
              text="Some description"
              price="$350"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Similar;
