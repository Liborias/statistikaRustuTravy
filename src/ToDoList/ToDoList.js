import React from "react";
import "./style.css";

class ToDoList extends React.Component {
  state = {
    tasks: ["koupit boty", "dát si oběd", "stihnout výstavu"]
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
  render() {
    const { tasks } = this.state;
    return (
      <div className="wrapper">
        <h2>To Do List</h2>
        <div className="tasksFrame">
          <div className="tasksList">{this.renderTask()}</div>
        </div>
        <p>Kdo je lepší, žena, nebo muž?</p>
        <input type="checkbox" name="sex" id="r1" />
        <label for="r1"> muž </label>
        <input type="checkbox" name="sex" id="r2" />
        <label for="r2"> muž </label>
        <input type="password" name="sex" id="r3" />
        <label for="r3"> muž </label>
      </div>
    );
  }
}
export default ToDoList;
