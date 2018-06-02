import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import Article from "./modals/Article";
import Ask from "./modals/Ask";
import Memo from "./modals/Memo";
import Petition from "./modals/Petition";
import Poll from "./modals/Poll";
import Product from "./modals/Product";
import Review from "./modals/Review";

class Postbuttons extends Component {
  render() {
    return (
      <div>
        <Article />
        <Ask />
        <Memo />
        <Petition />
        <Poll />
        <Product />
        <Review />
      </div>
    );
  }
}

export default Postbuttons;
