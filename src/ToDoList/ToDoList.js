import React from "react";
import "./style.css";

class ToDoList extends React.Component {
  state = {
    tasks: ["koupit boty", "dát si oběd", "stihnout výstavu"],
    inputValue: ""
  };
  renderTask = () => {
    const { tasks } = this.state;
    const vysledneDivy = tasks.map((x, index) => (
      <div className="task">
        <span>{index + 1} - </span>
        {x}
      </div>
    ));
    console.log(vysledneDivy);
    return vysledneDivy;
  };
  addTask = (ukol = "napij se vína!") => {
    const { tasks } = this.state;
    // const rozsirene = tasks.concat(["se učit"]);
    //    this.setState({ tasks: rozsirene });
    const newTask = [ukol];
    const copyTasks = [...tasks, ...newTask]; // tři tečky jsou příkaz k vytvoření kopie z tasks
    //copyTasks.push("uuuu");
    this.setState({ tasks: copyTasks, inputValue: "" }); //tohle nejen přepíše pole s úkoly za nové, ale i promaže řádek inputu
  };
  render() {
    const { tasks } = this.state;
    return (
      <div className="wrapper">
        <h2>To Do List</h2>
        <div className="tasksFrame">
          <input
            type="text"
            onChange={e => this.setState({ inputValue: e.target.value })} //e se používá, protože tím písmenem začíná event (je to ustálené), target je označní vstupu (input) a value je jeden z atributů inputu
            value={this.state.inputValue}
          />
          <button onClick={() => this.addTask(this.state.inputValue)}>
            Přidej úkol
          </button>
          <div className="tasksList">{this.renderTask()}</div>
        </div>
        {/*<p>Kdo je lepší, žena, nebo muž?</p>
        <input type="checkbox" name="sex" id="r1" />
        <label for="r1"> muž </label>
        <input type="checkbox" name="sex" id="r2" />
        <label for="r2"> muž </label>
        <input type="password" name="sex" id="r3" />
        <label for="r3"> muž </label>*/}
      </div>
    );
  }
}
export default ToDoList;
