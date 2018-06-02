import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img src="https://placeimg.com/800/300/nature" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="https://placeimg.com/800/300/person" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="https://placeimg.com/800/300/object" />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
);
