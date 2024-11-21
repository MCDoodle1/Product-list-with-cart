import { useEffect, useState } from "react";
import ButtonSmall from "./ButtonSmall";

const Card = () => {
  const [data, setData] = useState(null);
  const buttonClicked = false;

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
      <section className="flex-wrapper column-1">
        <h1>Desserts</h1>
        <ul className="card-grid">
          {data.map((item, index) => (
            <li key={index} className="card">
              <div className="image-wrapper">
                <img
                  src={item.image.mobile}
                  alt={item.name}
                  className={buttonClicked ? "image clicked" : "image"}
                />
                <ButtonSmall onClick={buttonClicked} />
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
