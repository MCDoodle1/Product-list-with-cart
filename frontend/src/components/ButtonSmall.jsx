import cartIcon from "../../assets/images/icon-add-to-cart.svg";

const ButtonSmall = ({
  index,
  onClick,
  buttonClicked,
  increment,
  decrement,
  count,
}) => {
  return !buttonClicked ? (
    <button className="button-small unclicked" onClick={onClick}>
      <img src={cartIcon} alt="Add to cart icon" className="cart-icon" />
      <p>Add to Cart</p>
    </button>
  ) : (
    <div className="button-small clicked">
      <button className="minus-icon" onClick={() => decrement(index)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 2"
        >
          <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      </button>

      <div>{count}</div>
      <button className="plus-icon" onClick={() => increment(index)}>
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
      </button>
    </div>
  );
};
export default ButtonSmall;
