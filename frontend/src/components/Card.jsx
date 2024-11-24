import { useEffect, useState } from "react";
import ButtonSmall from "./ButtonSmall";

const Card = () => {
  const [data, setData] = useState(null);
  const [screenSize, setScreenSize] = useState("mobile");
  const buttonClicked = true;

  useEffect(() => {
    fetch("../../data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Function to determine screen size category
    const updateScreenSize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize("desktop");
      } else if (window.innerWidth >= 768) {
        setScreenSize("tablet");
      } else {
        setScreenSize("mobile");
      }
    };

    // Set initial screen size and add resize event listener
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", updateScreenSize);
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
                  src={item.image[screenSize]}
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
