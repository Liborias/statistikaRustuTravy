import React from "react";
import "./style.css";

class ToDoList2 extends React.Component {
  state = {
    tasks: [
      {
        taskName: "Vytvořit HTML index",
        isDone: false,
        priority: 1,
        description: "Podrobnosti úkolu",
        reponsible: null,
        id: 1
      },
      {
        taskName: "Grafický návrh",
        isDone: false,
        priority: 2,
        description: "Podrobnosti úkolu",
        reponsible: null,
        id: 2
      },
      {
        taskName: "Kontaktovat klienta",
        isDone: true,
        priority: 3,
        description: "Podrobnosti úkolu",
        reponsible: null,
        id: 3
      }
    ],
    inputValue: ""
  };
  renderTask = () => {
    const { tasks } = this.state;
    const vysledneDivy = tasks.map(x => (
      <div
        className={`task priority${x.priority} ${x.isDone ? "done" : ""}`}
        key={x.id}
      >
        <div className="taskRow">
          <span>
            {x.priority} {x.taskName}
          </span>
          <span>
            {!x.isDone && (
              <button className="donButton" onClick={() => this.setDone(x.id)}>
                Done
              </button>
            )}
            <button className="delButton" onClick={() => this.remove(x.id)}>
              Delete
            </button>
          </span>
        </div>
      </div>
    ));
    return vysledneDivy;
  };

  setDone = taskId => {
    const { tasks } = this.state;
    const tasksUpdated = tasks.map(x => {
      if (x.id === taskId) {
        return { ...x, isDone: true };
      } else {
        return x;
      }
    });
    this.setState({ tasks: tasksUpdated });
    // mapovanim najit shodu s taskId, tomu aktualizuj isDone a přepsat state
    console.log("úkol s id je hotový ", taskId);
  };

  remove = taskId => {
    const { tasks } = this.state;
    const tasksUpdated = tasks.filter(x => x.id !== taskId);
    this.setState({ tasks: tasksUpdated });

    console.log("smazáno", taskId);
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
        <h2>To Do List 2</h2>
        <div className="tasksFrame">
          <input
            className="textField"
            type="text"
            onChange={e => this.setState({ inputValue: e.target.value })} //e se používá, protože tím písmenem začíná event (je to ustálené), target je označní vstupu (input) a value je jeden z atributů inputu
            value={this.state.inputValue}
          />
          <button
            className="addTaskButton"
            onClick={() => this.addTask(this.state.inputValue)}
          >
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
export default ToDoList2;
