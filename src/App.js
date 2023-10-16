// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const people1 = ["a", "b", "c", "d", "e", "f"]; //for a single array

  //for an object
  const people2 = [
    { name: "a", age: 20 },
    { name: "b", age: 35 },
    { name: "c", age: 45 },
    { name: "d", age: 68 },
    { name: "e", age: 90 },
    { name: "f", age: 95 },
    { name: "g", age: 100 },
  ];

  //for data load from api
  const [people3, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const products = [
    { name: "photoshop", price: "&200" },
    { name: "illestot", price: "&200" },
    { name: "premierpro", price: "&200" },
    { name: "adove", price: "&200" },
    { name: "light", price: "&200" },
    { name: "sfgs", price: "&200" },
  ];

  return (
    <div className="App">
      {people1.map((s) => (
        <Person name={s}></Person>
      ))}

      {people2.map((s) => (
        <Person name={s.name} age={s.age}></Person>
      ))}

      {people3.slice(0,10).map((s) => ( //slice is used to vew only first 10 elements
        <User key={s.id} title={s.title} url={s.url}></User>
      ))}

      {products.map((pd) => (
        <ProductPrice name={pd.name} price={pd.price}></ProductPrice>
      ))}

      <Counter></Counter>
    </div>
  );
}

// ************************************************************************** //

const Person = (props) => {
  const personStyle = {
    border: "10px solid green",
    margin: "10px",
    padding: "20px",
    width: "500px",
  };
  return (
    <div style={personStyle}>
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
    </div>
  );
};

//************************************************************************************// */
const ProductPrice = (props) => {
  const priceStyle = {
    border: "1px solid yellow",
    borderRadius: "10px",
    backgroundColor: "pink",
    height: "200px",
    width: "200px",
    float: "left",
  };

  return (
    <div style={priceStyle}>
      <h6>Name: {props.ame}</h6>
      <h6>Price: {props.price} </h6>
      <button>Buy Now</button>
    </div>
  );
};

//************************************************************************************************ */
//state
const Counter = () => {
  const [count, setCount] = useState(0); //count = 0 and setCount is a function
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div>
      <h6>
        ***********************************************************************************************************************************
      </h6>
      <h1>Learning State</h1>
      <h3>Count: {count}</h3>
      <button type="button" onClick={handleIncrease}>
        Increase
      </button>
      <button type="button" onClick={handleDecrease}>
        Decrease
      </button>
    </div>
  );
};

//****************************************************************************************************** */
//load data
const User = (props) => {
  return (
    <div>
      <h6>Title: {props.title}</h6>
      <h6>URL: {props.url}</h6>
    </div>
  );
};

export default App;
