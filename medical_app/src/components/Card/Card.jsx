import React from "react";
import './Card.css'

const Card = () => {
  return <>
    <div class="item">
    <div class="img-box">
      <img src="https://source.unsplash.com/1-nx1QR5dTE" alt="Awesome Sunglasses"/>
    </div>
    <div class="details">
      <h2>Medicine<br/><span>Men's Collection</span></h2>
      <div class="price">149$</div>
      <label>Size</label>
      <ul>
        <li>55-14</li>
        <li>58-14</li>
        <li>62-14</li>
      </ul>
      <label>Color</label>
      <ul class="colors">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <a href="#">Add to cart</a>
    </div>
  </div>
  </>;
};

export default Card;
