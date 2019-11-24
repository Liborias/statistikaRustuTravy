import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter"; //dokud komponentu nenaimportuji, tak ji nemohu použít

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello world</p>
        <Counter date="5748748" />
        {/* datové typy proměnných číslo je datový typ number 
        v javaskriptu se píše jako číslo zde jako parametr by bylo ve složených závorkách zde by to bylo date={5}
        text je datový typ string a takto je to psáno zde date="5748748"
        Ještě může být logická hodnota typ boolan a hodnota je buď true, nebo false a posílá se ve složených závokách date={true}*/}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter date="prdel" />
      </header>
    </div>
  );
}

export default App;
