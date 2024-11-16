import { useEffect, useState } from "react";
import ButtonSmall from "./ButtonSmall";

const Card = () => {
  const [data, setData] = useState(null);
  const buttonClicked = useState(false);

  useEffect(() => {
    fetch("../../data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>Desserts</h1>
      <ul className="card-wrapper">
        {data.map((item, index) => (
          <li key={item.id} className="card">
            <div className="image-wrapper">
              <img
                src={item.image.mobile}
                alt={item.name}
                className={buttonClicked ? "card image" : "card image clicked"}
              />
              <ButtonSmall buttonClicked={buttonClicked} />
            </div>

            <div className="card category">{item.category}</div>
            <div className="card name">{item.name}</div>
            <div className="card price">${item.price.toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Card;
