import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Lightbox from "./components/Lightbox";

function App() {
  const lightboxActive = true;

  return (
    <>
      {lightboxActive && <Lightbox />}
      <Card />
      <Cart />
    </>
  );
}

export default App;
