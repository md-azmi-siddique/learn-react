// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const people = ["a", "b", "c", "d", "e", "f"];
  const products = [
    { name: "photoshop", price: "&200" },
    { name: "illestot", price: "&200" },
    { name: "premierpro", price: "&200" },
    { name: "adove", price: "&200" },
    { name: "light", price: "&200" },
    { name: "sfgs", price: "&200" },
  ];
  // const product = products.map(s => s.name)
  // console.log(product)

  return (
    <div className="App">
      <header className="App-header">
        <Person name="kuddus" job="player"></Person>
        <Person name="Rafir" job="dancer"></Person>
        {/*///////////////////////////////////////*/}
        <Counter></Counter>
        {/*///////////////////////////////////////*/}
        <User></User>

        {products.map((pd) => (
          <ProductPrice product={pd}></ProductPrice>
        ))}

        {
          people.map(names => <li>{names}</li>)
        }
      </header>
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
      <p>Profession: {props.job}</p>
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

  const { name, price } = props.product;

  return (
    <div style={priceStyle}>
      <h6>Name: {name}</h6>
      <h6>Price: {price} </h6>
      <button>Buy Now</button>
    </div>
  );
};

//************************************************************************************************ */
//state
const Counter = () => {
  const [count, setCount] = useState(0); //count = 0 and setCount is a function
  const handleIncrease = () => {
    console.log("Increase");
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleDecrease = () => {
    console.log("Decrease");
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
const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h6>
        ***********************************************************************************************************************************
      </h6>
      <h3>Users</h3>
      <ul>
        {user.map((u) => (
          <li>
            id: {u.id} Name: {u.name} Email:{u.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
