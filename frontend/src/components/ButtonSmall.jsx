import cartIcon from "../../assets/images/icon-add-to-cart.svg";
import minus from "../../assets/images/icon-decrement-quantity.svg";
import plus from "../../assets/images/icon-increment-quantity.svg";
import { useState } from "react";

const ButtonSmall = () => {
  const buttonClicked = false;

  return buttonClicked ? (
    <div className="button-small unclicked">
      <img src={cartIcon} alt="Add to cart icon" className="cart-icon" />
      <p>Add to Cart</p>
    </div>
  ) : (
    <div className="button-small clicked">
      <div className="minus-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 2"
        >
          <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      </div>

      <div>4</div>
      <div className="plus-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
        >
          <path
            fill="#fff"
            d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
          />
        </svg>
      </div>
    </div>
  );
};
export default ButtonSmall;
