import ButtonLarge from "./ButtonLarge";

const Lightbox = ({ cart, count, totalValue, confirm }) => {
  return (
    <div className="lightbox-layer">
      <div className="lightbox-wrapper">
        <img
          className="lightbox confirmed-icon"
          src="/Product-list-with-cart/assets/images/icon-order-confirmed.svg"
          alt="order confirmed icon"
        />
        <div className="lightbox title">Order Confirmed</div>
        <div className="lightbox text">We hope you enjoy your food!</div>

        <>
          <div className="lightbox products-wrapper">
            {cart.map((item, index) => (
              <>
                <div key={index} className="lightbox item-wrapper">
                  <img
                    className="lightbox thumbnail"
                    src={item.image.thumbnail}
                    alt=""
                  />
                  <div className="lightbox item-subwrapper">
                    <div className="lightbox name">{item.name}</div>
                    <div className="lightbox number-pricewrapper">
                      <div className="lightbox number-pricewrapper number">
                        {count[item.index] || 0}x
                      </div>
                      <div className="lightbox number-pricewrapper price">
                        @ ${item.price.toFixed(2)}
                      </div>
                    </div>{" "}
                  </div>
                  <div className="lightbox total-itemprice">
                    ${(item.price * (count[item.index] || 0)).toFixed(2)}
                  </div>
                </div>
                <hr className="lightbox line" />
              </>
            ))}
            <div className="lightbox ordertotal-wrapper">
              <div className="lightbox ordertotal-text">Order Total</div>
              <div className="lightbox ordertotal-amount">
                ${totalValue.toFixed(2)}
              </div>
            </div>
          </div>
          <ButtonLarge text={"Start New Order"} confirm={confirm} />
        </>
      </div>
    </div>
  );
};
export default Lightbox;
