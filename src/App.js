import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);

  // What should cart be? Array of BakeryItems? Probably too much info though

  // const loadData = () => {
  //   setData(bakeryData);
  // };

  const showCart = () => {
    if (!cart.length) {
      return <p>Cart is currently empty.</p>;
    }

    const cartItems = cart.map((item) => (
      <p>
        <i>{item.name}</i> {item.price}
      </p>
    ));
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
    return (
      <div>
        {cartItems}
        <span>
          <strong>{totalPrice.toFixed(2)}</strong>
        </span>
      </div>
    );
  };

  const addToCart = (item) => {
    cart.push(item);
    setCart([...cart]);
    console.log(cart);
  };

  // setArray([...array]) sets it to a new array, forces page to update

  // Placeholder to output jsx data
  const buildElements = () => {
    const jsxlist = bakeryData.map(
      (
        item,
        index // TODO: map bakeryData to BakeryItem components
      ) => (
        <BakeryItem
          image={item.image}
          name={item.name}
          price={item.price}
          description={item.description}
          addToCart={addToCart}
        ></BakeryItem>
      )
    );
    return jsxlist;
  };

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="BakeryContent">{buildElements()}</div>
      <div className="Cart">
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {showCart()}
      </div>
    </div>
  );
}

export default App;
