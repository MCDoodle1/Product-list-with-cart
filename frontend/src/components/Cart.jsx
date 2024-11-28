import emptyCartIcon from "../../assets/images/illustration-empty-cart.svg";
import tree from "../../assets/images/icon-carbon-neutral.svg";
import ButtonLarge from "../components/ButtonLarge";
import CartItem from "./CartItem";

const Cart = ({ cart, count, deleteItem, confirm, totalItems, totalValue }) => {
  return (
    <>
      <div className="flex-wrapper column-2">
        <section className="cart-wrapper">
          <h2 className="cart title">Your Cart ({totalItems})</h2>
          {cart.length === 0 ? (
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
              {cart.map((item) => (
                <CartItem
                  key={item.index}
                  item={item}
                  count={count}
                  deleteItem={deleteItem}
                />
              ))}
              <div className="cart ordertotal-wrapper">
                <div className="cart ordertotal-text">Order Total</div>
                <div className="cart ordertotal-amount">
                  ${totalValue.toFixed(2)}
                </div>
              </div>

              <div className="cart carbon-statement">
                <img src={tree} alt="tree as symbol carbon-neutrality" />
                <div className="cart carbon-text">
                  This is a <span>carbon-neutral</span> delivery
                </div>
              </div>
              <ButtonLarge text={"Confirm Order"} confirm={confirm} />
            </>
          )}
        </section>
      </div>
    </>
  );
};
export default Cart;
