import React from "react";
import "./style.css";
import Modal from "../Modal";

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
    inputValue: "",
    priorita: 1,
    podrobnosti: "",
    showModalData: undefined,
    filtredTasks: [],
    doneTasks: [],
    checkBoxDone: undefined
  };

  renderTask = () => {
    const { tasks } = this.state;
    const filtredTasks = tasks.filter(x => x.isDone !== true);
    const vysledneDivy = filtredTasks.map(x => (
      <div
        className={`task priority${x.priority} ${x.isDone ? "done" : ""}`}
        key={x.id}
      >
        <div className="taskRow">
          <span>
            {x.priority} {x.taskName}
          </span>
          <span>
            <button
              className="delButton"
              onClick={() => this.setState({ showModalData: x })}
            >
              Detail
            </button>
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

  addTask = (ukol = "", podrobnosti = "", priorita = 1) => {
    const { tasks } = this.state;
    // const rozsirene = tasks.concat(["se učit"]);
    //    this.setState({ tasks: rozsirene });
    const newTask = {
      taskName: ukol,
      isDone: false,
      priority: priorita,
      description: podrobnosti,
      reponsible: null,
      //id: Math.round(Math.random()*10000) //generuje náhodá čísl (Jiřinčin způsob)
      id: new Date()
    };
    const copyTasks = [...tasks, newTask]; // tři tečky jsou příkaz k vytvoření kopie z tasks
    //copyTasks.push("uuuu");
    this.setState({ tasks: copyTasks, inputValue: "" }); //tohle nejen přepíše pole s úkoly za nové, ale i promaže řádek inputu
  };

  updateDescritpion = (newDesc, editedId) => {
    const { tasks } = this.state;
    const tasksUpdated = tasks.map(x => {
      if (x.id === editedId) {
        return { ...x, description: newDesc };
      }
      return x;
    });
    this.setState({ tasks: tasksUpdated, showModalData: undefined });
  };

  render() {
    const {
      tasks,
      showModalData,
      inputValue,
      podrobnosti,
      priorita
    } = this.state;
    return (
      <div className="wrapper">
        <h2>To Do List 2</h2>
        <div className="tasksFrame">
          <input
            placeholder="Název úkolu"
            className="textField"
            type="text"
            onChange={e => this.setState({ inputValue: e.target.value })} //e se používá, protože tím písmenem začíná event (je to ustálené), target je označní vstupu (input) a value je jeden z atributů inputu
            value={inputValue}
          />
          <input
            placeholder="Podrobnosti úkolu"
            className="textField"
            type="text"
            onChange={e => this.setState({ podrobnosti: e.target.value })} //e se používá, protože tím písmenem začíná event (je to ustálené), target je označní vstupu (input) a value je jeden z atributů inputu
            value={podrobnosti}
          />
          <div className="priorityField">
            <div>
              <input
                checked
                type="radio"
                id="priorita_1"
                name="gender"
                value="1"
                onChange={e => this.setState({ priorita: 1 })}
              />
              <label htmlFor="priorita_1">priorita 1</label>
            </div>
            <div>
              <input
                type="radio"
                id="priorita_2"
                name="gender"
                value="2"
                onChange={e => this.setState({ priorita: 2 })}
              />
              <label htmlFor="priorita_2">priorita 2</label>
            </div>
            <div>
              <input
                type="radio"
                id="priorita_3"
                name="gender"
                value="3"
                onChange={e => this.setState({ priorita: 3 })}
              />
              <label htmlFor="priorita_3">priorita 3</label>
            </div>
          </div>
          <button
            className="addTaskButton"
            onClick={() => this.addTask(inputValue, podrobnosti, priorita)}
          >
            Přidej úkol
          </button>
          <div className="tasksList">{this.renderTask()}</div>
          <div>
            <input
              type="checkbox"
              className="filed-in"
              id="filled-in-box"
              onChange={e => this.setState({ heckBoxDone: true })}
            />
            <label htmlFor="filled-in-box">Skrýt hotové</label>
          </div>
        </div>

        {showModalData && (
          <Modal
            data={showModalData}
            closeModal={() => this.setState({ showModalData: undefined })}
            updateDescritpion={(newDesc, editedId) =>
              this.updateDescritpion(newDesc, editedId)
            }
          />
        )}
      </div>
    );
  }
}
export default ToDoList2;
