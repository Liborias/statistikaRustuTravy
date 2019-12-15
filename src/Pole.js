import React from "react";

class Pole extends React.Component {
  state = {
    kosovo: [3, 5, 7, 11, 13, 5, 2],
    moravske: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    bitevni: [],
    result: ""
  }; /*toto je pole*/

  firstOne = prom1 => {
    /* do závorek u funkce mohu definovat proměnnou */
    console.log("První prvek z kosovo");
    const firstOne = prom1[0];
    this.setState({ result: firstOne });
  };

  addItem = () => {
    const { moravske } = this.state;
    const addItem = this.state.moravske.length + 1;
    this.state.moravske.push(addItem);
    this.setState({ result: moravske.join(", ") });
  };

  eachItem = () => {
    this.state.moravske.forEach(item => {
      if (item % 2 !== 0) {
        console.log(item);
      }
    });
  };

  bigDeal = () => {
    const bigDeal = this.state.kosovo.length >= 7 ? "ano" : "ne";
    this.setState({ result: bigDeal });
  };

  render() {
    const { kosovo, moravske, result, bitevni } = this.state;
    /*zajišťuje vykreslení komponenty na obrazovku 
    a pokud v komponentě nastanou změny, tak se provádí opakovaně */
    return (
      <div>
        <p>Tady se učíme pracovat s polem</p>
        <h3>{result}</h3>
        <p>
          {kosovo[3]} se nerovná {moravske[5]}
        </p>
        <button
          onClick={() => {
            console.log("Poslední prvek z moravske");
            const lastOne = moravske[moravske.length - 1];
            this.setState({ result: lastOne });
          }}
        >
          vypiš poslední prvek z moravske
        </button>{" "}
        <br />
        <button onClick={() => this.firstOne(kosovo)}>
          vypiš prvni prvek z kosovo
        </button>
        <button onClick={() => this.firstOne(moravske)}>
          vypiš prvni prvek z moravske
        </button>
        <button onClick={() => this.bigDeal()}>je Kosovo větší, než 5?</button>
        <button
          onClick={() => {
            this.addItem();
            console.log("pole moravske", moravske);
          }}
        >
          přidej item k moravske
        </button>
        <br />
        <button
          onClick={() => {
            this.eachItem();
          }}
        >
          vypiš moravske cyklem
        </button>
      </div>
    );
  }
}
export default Pole;

/*
1. Vypiš poslední prvek z pole Moravske - OK
2. Vypiš první prvek z pole Kosovo -ok
3. Zjisti zda je velikost pole Kosovo větší než 5 a vypiš Ano / Ne ok
4. Zjisti o kolik hodnot je pole Moravske větší než Kosovo.
--- maruska.push(5) přidá hodnotu na konec pole s názvem maruska (nápověda k úkolu 5 marušku netvoř!)
5. Do pole Moravske přidej (na konec) novou hodnotu pokračující v posloupnost ok
--- všechny hodnoty pole se projdou pomocí cyklu forEach
6. Napiš funkci, která vypíše všechny hodnoty pole Moravske.
Tuto fci zavolej na kolik nového tlačítka.
7. Přetvoř fci z č6 na univerzálnější variantu, kdy bude pole přijímat jako proměnnou.




*/
