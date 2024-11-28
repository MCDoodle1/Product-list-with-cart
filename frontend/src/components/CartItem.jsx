import cross from "../../assets/images/icon-remove-item.svg";

const CartItem = ({ item, count, deleteItem }) => {
  return (
    <>
      <div className={"cart product-wrapper"}>
        <div className="cart item-wrapper">
          <div className="cart name">{item.name}</div>
          <div className="cart itemprice-wrapper">
            <div className="count">{count[item.index] || 0}x</div>
            <div className="price">@ ${item.price.toFixed(2)}</div>
            <div className="itemtotal">
              ${(item.price * (count[item.index] || 0)).toFixed(2)}
            </div>
          </div>
        </div>
        <button onClick={() => deleteItem(item.index)}>
          <img
            className="cart remove-item"
            src={cross}
            alt="cross-shaped icon to remove item"
          />
        </button>
      </div>
      <hr />
    </>
  );
};
export default CartItem;
