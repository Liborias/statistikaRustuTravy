import React from "react";

class Clock extends React.Component {
  state = {
    hour: 12,
    minute: 0,
    day: "po",
    isNigt: false
  };

  render() {
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
        <p>{this.state.isNigt ? "Je překrásná noc" : "Je nádherný den"}</p>
        {/* if(this.state.isNigt) console.log ("je překrásná noc")*/}
      </div>
    );
  }
}
export default Clock;
