import React from "react"; // importuje react, aby se mohly využívat reactové komponenty

class Counter extends React.Component {
  // rozšiřuje React.Component o další funkci, kterou píšeme
  state = {
    // stav
    count: 5,
    autor: "Libor"
  };
  render() {
    // tady si můžu zpracovat věci, které pak returnem vypíšeme
    console.log("Neprovokuj Krakena"); // do závorek můžu napsat cokoliv
    return (
      <p>
        Vůbec tomu nerozumím {this.state.count} {this.props.date}
      </p> //state je hodnota, která je obsažená uvnitř komponenty. props je hodnota, která je přidaná ke komponentě
      //v ostrých závorkách, tam kde komponentu vkládám v tomto případě v app.js takto <Counter date="prdel" />
    ); //toto se výsledně zobrazí (nejčastěji se píše html)
  }
}
export default Counter;
