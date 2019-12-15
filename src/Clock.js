import React from "react";

class Clock extends React.Component {
  state = {
    hour: 12,
    minute: 0,
    day: "po",
    isNight: false,
    days: ["pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota", "neděle"]
  }; /*toto je pole*/

  dayToNight = () => {
    const dayOrNight = this.state.isNight;
    this.setState({ isNight: !dayOrNight });
  };

  render() {
    /*zajišťuje vykreslení komponenty na obrazovku 
    a pokud v komponentě nastanou změny, tak se provádí opakovaně */
    console.log(this.state);
    let minuteState = "" + this.state.minute;
    if (this.state.minute < 10) {
      minuteState = "0" + this.state.minute;
    }
    return (
      <div>
        <p>
          {this.state.hour} : {minuteState} Den v týdnu: {this.state.day}{" "}
        </p>
        <p>{this.state.isNight ? "Je překrásná noc" : "Je nádherný den"}</p>
        {/* if(this.state.isNight) console.log ("je překrásná noc")*/}
        <p>
          {this.state.days[4]} velikost pole {this.state.days.length}
        </p>
        <button
          onClick={() => {
            console.log("klikl jsi mě, dobrý co?");
            this.setState({ hour: 20 });
          }}
        >
          klikni mě!
        </button>
        <br />
        <button onClick={() => this.dayToNight()}>Nechť je den nocí</button>
      </div>
    );
  }
}
export default Clock;
