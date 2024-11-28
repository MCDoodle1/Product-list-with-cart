import ButtonSmall from "./ButtonSmall";

const Card = ({
  data,
  screenSize,
  clickedItems,
  addToCart,
  increment,
  decrement,
  count,
}) => {
  return (
    <>
      <section className="flex-wrapper column-1">
        <h1>Desserts</h1>
        <ul className="card-grid">
          {data.map((item, index) => (
            <li key={index} className="card">
              <div className="image-wrapper">
                <img
                  src={item.image[screenSize]}
                  alt={item.name}
                  className={clickedItems[index] ? "image clicked" : "image"}
                />
                <ButtonSmall
                  index={index}
                  onClick={() => addToCart(item, index)}
                  buttonClicked={clickedItems[index] || false}
                  increment={increment}
                  decrement={decrement}
                  count={count[index] || 0}
                />
              </div>

              <div className="category">{item.category}</div>
              <div className="name">{item.name}</div>
              <div className="price">${item.price.toFixed(2)}</div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default Card;
