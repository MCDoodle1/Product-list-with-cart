import cartIcon from "../../assets/images/icon-add-to-cart.svg";
import minus from "../../assets/images/icon-decrement-quantity.svg";
import plus from "../../assets/images/icon-increment-quantity.svg";
import { useState } from "react";

const ButtonSmall = () => {
  const buttonClicked = useState(false);

  return buttonClicked ? (
    <div className="button-small unclicked">
      <img src={cartIcon} alt="Add to cart icon" className="cart-icon" />
      <p>Add to Cart</p>
    </div>
  ) : (
    <div className="button-small clicked">
      <img src={minus} alt="" />
      <div>4</div>
      <img src={plus} alt="" />
    </div>
  );
};
export default ButtonSmall;
