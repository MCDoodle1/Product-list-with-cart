import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Lightbox from "./components/Lightbox";

function App() {
  const [data, setData] = useState([]);
  const [screenSize, setScreenSize] = useState("mobile");
  const [cart, setCart] = useState([]);
  const [clickedItems, setClickedItems] = useState({});
  const [count, setCount] = useState({});
  const [lightboxActive, setLightboxActive] = useState(false);

  const totalItems = Object.values(count).reduce((acc, curr) => acc + curr, 0);
  const totalValue = cart.reduce(
    (acc, item) => acc + item.price * (count[item.index] || 1),
    0
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Attempt to fetch data from MongoDB
        const response = await fetch("http://localhost:5000/products");
        if (!response.ok) throw new Error("MongoDB fetch failed");

        const dbData = await response.json();
        setData(dbData);
      } catch (error) {
        console.warn("Falling back to local data.json:", error.message);

        // Fallback to data.json if MongoDB fetch fails
        fetch("/Product-list-with-cart/data.json")
          .then((response) => response.json())
          .then((jsonData) => setData(jsonData))
          .catch((err) => console.error("Error loading data.json:", err));
      }
    };

    fetchData();
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

  const handleAddToCart = (product, index) => {
    // function to define actions after "Add to Cart" button is clicked.
    setCart((prevCart) => {
      // Check if an item with that index exists in the cart
      const isItemInCart = prevCart.some((item) => item.index === index);
      if (isItemInCart) {
        // if it exists, render the cart as it is to avoid duplicates
        return prevCart;
      }
      // Add the item to the cart if it does not exist
      return [...prevCart, { ...product, index }];
    });

    setCount((prevCount) => ({
      // Change the item count to 1
      ...prevCount,
      [index]: 1,
    }));

    setClickedItems((prevState) => ({
      // Change the button's format.
      ...prevState,
      [index]: true,
    }));
  };

  const handleIncrement = (index) => {
    // Function to increase the count
    setCount((prevCount) => ({
      // Increase the item's count by one
      ...prevCount,
      [index]: (prevCount[index] || 0) + 1,
    }));
  };

  const handleDecrement = (index) => {
    // Function to decrease the count
    setCount((prevCount) => {
      // Decrease the item's count by one
      const newCount = (prevCount[index] || 0) - 1;
      if (newCount <= 0) {
        // Remove from cart if count is 0
        setCart((prevCart) => prevCart.filter((item) => item.index !== index));
        // Revert the button's format
        setClickedItems((prevClicked) => ({
          ...prevClicked,
          [index]: false,
        }));
        // count state is set to zero
        return { ...prevCount, [index]: 0 };
      }
      // if count is > 0, render the newCount (-1)
      return { ...prevCount, [index]: newCount };
    });
  };

  const handleDeleteFromCart = (index) => {
    // function to delete an item from the cart
    setCart((prevCart) => prevCart.filter((item) => item.index !== index));
    // Revert the button's format
    setClickedItems((prevClicked) => ({
      ...prevClicked,
      [index]: false,
    }));
  };

  const handleConfirmOrder = () => {
    setLightboxActive(!lightboxActive);
  };

  const handleStartNewOrder = () => {
    setLightboxActive(false);
    setCart([]);
    setClickedItems({});
    setCount({});
  };

  return (
    <>
      {lightboxActive && (
        <Lightbox
          cart={cart}
          count={count}
          totalItems={totalItems}
          totalValue={totalValue}
          confirm={handleStartNewOrder}
        />
      )}
      <Card
        data={data}
        screenSize={screenSize}
        clickedItems={clickedItems}
        addToCart={handleAddToCart}
        increment={handleIncrement}
        decrement={handleDecrement}
        count={count}
      />
      <Cart
        cart={cart}
        count={count}
        deleteItem={handleDeleteFromCart}
        confirm={handleConfirmOrder}
        totalItems={totalItems}
        totalValue={totalValue}
      />
    </>
  );
}

export default App;
