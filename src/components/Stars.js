import React from "react";
import { Grid } from "semantic-ui-react";
import greenstar from "../images/greenstar.png";
import graystar from "../images/graystar.png";

class Stars extends React.Component {
  render() {
    const { rating } = this.props;
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <img src={greenstar} style={{ marginRight: "3px", width: "20px" }} />
      );
    }
    for (let i = 0; i < 5 - rating; i++) {
      stars.push(
        <img src={graystar} style={{ marginRight: "3px", width: "20px" }} />
      );
    }
    return <div>{stars}</div>;
  }
}

export default Stars;
