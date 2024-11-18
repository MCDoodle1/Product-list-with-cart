import emptyCartIcon from "../../assets/images/illustration-empty-cart.svg";
import tree from "../../assets/images/icon-carbon-neutral.svg";
import cross from "../../assets/images/icon-remove-item.svg";
import ButtonLarge from "../components/ButtonLarge";
import { useState } from "react";

const Cart = () => {
  const buttonClicked = useState(false);
  return (
    <>
      <section className="cart-wrapper">
        <h2 className="cart title">Your Cart (0)</h2>
        {buttonClicked ? (
          <>
            <img
              className="cart image"
              src={emptyCartIcon}
              alt="pie pieces illustrating empty cart"
            />
            <div className="cart content">
              Your added items will appear here
            </div>{" "}
          </>
        ) : (
          <>
            <div className="cart product-wrapper">
              <div className="cart item-wrapper">
                <div className="cart name">Classic Tiramisu</div>
                <div className="cart itemprice-wrapper">
                  <div className="count">1x</div>
                  <div className="price">@ $5.50</div>
                  <div className="itemtotal">$5.50</div>
                </div>
              </div>
              <img
                className="cart remove-item"
                src={cross}
                alt="cross-shaped icon to remove item"
              />
            </div>
            <hr />
            <div className="cart product-wrapper">
              <div className="cart item-wrapper">
                <div className="cart name">Vanilla Bean Creme Brulee</div>
                <div className="cart itemprice-wrapper">
                  <div className="cart count">4x</div>
                  <div className="cart price">@ $7.00</div>
                  <div className="cart itemtotal">$28.00</div>
                </div>
              </div>
              <img
                className="cart remove-item"
                src={cross}
                alt="cross-shaped icon to remove item"
              />
            </div>
            <hr />
            <div className="cart product-wrapper">
              <div className="cart item-wrapper">
                <div className="cart name">Vanilla Panna Cotta</div>
                <div className="cart itemprice-wrapper">
                  <div className="cart count">2x</div>
                  <div className="cart price">@ $6.50</div>
                  <div className="cart itemtotal">$13.00</div>
                </div>
              </div>
              <img
                className="cart remove-item"
                src={cross}
                alt="cross-shaped icon to remove item"
              />
            </div>
            <hr />
            <div className="cart ordertotal-wrapper">
              <div className="cart ordertotal-text">Order Total</div>
              <div className="cart ordertotal-amount">$46.50</div>
            </div>

            <div className="cart carbon-statement">
              <img src={tree} alt="tree as symbol carbon-neutrality" />
              <div className="cart carbon-text">
                This is a&nbsp;<span>carbon-neutral</span>&nbsp;delivery
              </div>
            </div>
            <ButtonLarge text={"Confirm Order"} onClick={handleConfirmOrder} />
          </>
        )}
      </section>
    </>
  );
};
export default Cart;
