import confirmedIcon from "../../assets/images/icon-order-confirmed.svg";
import productThumbnail_1 from "../../assets/images/image-tiramisu-thumbnail.jpg";
import productThumbnail_2 from "../../assets/images/image-creme-brulee-thumbnail.jpg";
import productThumbnail_3 from "../../assets/images/image-panna-cotta-thumbnail.jpg";
import ButtonLarge from "./ButtonLarge";

const Lightbox = () => {
  return (
    <div className="lightbox-layer">
      <div className="lightbox-wrapper">
        <img
          className="lightbox confirmed-icon"
          src={confirmedIcon}
          alt="order confirmed icon"
        />
        <div className="lightbox title">Order Confirmed</div>
        <div className="lightbox text">We hope you enjoy your food!</div>
        <div className="lightbox order-wrapper">
          <div className="lightbox item-wrapper">
            <img
              className="lightbox thumbnail"
              src={productThumbnail_1}
              alt=""
            />
            <div className="lightbox item-subwrapper">
              <div className="lightbox name">Classic Tiramisu</div>{" "}
              <div className="lightbox number-pricewrapper">
                <div className="lightbox number">1x</div>
                <div className="lightbox itemprice">@$5.50</div>
              </div>
            </div>
            <div className="lightbox total-itemprice">$5.50</div>
          </div>
          <hr className="lightbox line" />
          <div className="lightbox item-wrapper">
            <img
              className="lightbox thumbnail"
              src={productThumbnail_2}
              alt=""
            />
            <div className="lightbox item-subwrapper">
              <div className="lightbox name">Vanilla Bean Creme Brulee</div>
              <div className="lightbox number-pricewrapper">
                <div className="lightbox number">4x</div>
                <div className="lightbox itemprice">@$7.00</div>
              </div>
            </div>
            <div className="lightbox total-itemprice">$28.00</div>
          </div>
          <hr className="lightbox line" />
          <div className="lightbox item-wrapper">
            <img
              className="lightbox thumbnail"
              src={productThumbnail_3}
              alt=""
            />
            <div className="lightbox item-subwrapper">
              <div className="lightbox name">Vanilla Panna Cotta</div>
              <div className="lightbox number-pricewrapper">
                <div className="lightbox number">2x</div>
                <div className="lightbox itemprice">@$6.50</div>
              </div>
            </div>
            <div className="lightbox total-itemprice">$13.00</div>
          </div>
          <hr className="lightbox line" />
          <div className="lightbox ordertotal-wrapper">
            <div className="lightbox ordertotal-text">Order Total</div>
            <div className="lightbox ordertotal-amount">$46.50</div>
          </div>
        </div>
        <ButtonLarge text={"Start New Order"} />
      </div>
    </div>
  );
};
export default Lightbox;
