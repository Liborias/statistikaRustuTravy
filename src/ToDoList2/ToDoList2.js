import React from "react";
import "./style.css";
import Modal from "../Modal";
import RenderTask from "../Components/RenderTask";

class ToDoList2 extends React.Component {
  state = {
    tasks: [
      {
        taskName: "Zařídit řazení od nehotových, po hotové",
        isDone: true,
        priority: 1,
        description: "Nejdříve se mají řadit hotové úkoly, až za nimi hotové",
        responsible: "user1",
        id: 1
      },
      {
        taskName:
          "Z Components - RenderTask uděláme funkční komponentu (primitivní)",
        isDone: true,
        priority: 1,
        description: "Podrobnosti úkolu",
        responsible: "user1",
        id: 3
      },
      {
        taskName: "Select / Dropdown",
        isDone: true,
        priority: 2,
        description: "Podrobnosti úkolu",
        responsible: "user3",
        id: 2
      },
      {
        taskName:
          "Budeme zapínat / vypínat zpobrazení jednotlivých částí (Todo/ Couner/ ForFun ..)",
        isDone: false,
        priority: 2,
        description: "Podrobnosti úkolu",
        responsible: "user2",
        id: 4
      },
      {
        taskName: "Material design? Bootstrap + projekty?",
        isDone: false,
        priority: 2,
        description: "Podrobnosti úkolu",
        responsible: "user2",
        id: 5
      }
    ],
    inputValue: "",
    priorita: 1,
    podrobnosti: "",
    showModalData: undefined,
    filtredTasks: [],
    doneTasks: [],
    checkBoxDone: false,
    checkBoxUndone: false,
    responsibleUser: "user3"
  };

  renderFiltered = () => {
    const { tasks, checkBoxDone, checkBoxUndone } = this.state;
    let sortedTasks = [
      ...tasks.filter(x => x.isDone !== true),
      ...tasks.filter(x => x.isDone === true)
    ];

    if (checkBoxDone === true) {
      sortedTasks = sortedTasks.filter(x => x.isDone !== true);
    }
    if (checkBoxUndone === true) {
      sortedTasks = sortedTasks.filter(x => x.isDone === true);
    }
    if (sortedTasks.length === 0) {
      return (
        <p>Žádná položka neodpovídá filtru</p>
      ); /*Jakmile je retur, je funkce ukončena, další return už je ignorován! */
    }
    //return this.renderTask(sortedTasks);
    return (
      <RenderTask
        ukoly={sortedTasks}
        ukazPodrobnosti={m => this.setState({ showModalData: m })}
      />
    ); /*m je v tomto případě hodnota, kterou funkce řeší v rámci komponenty,
    m ji tady zastupuje a říká funkci ve stejtu, že se má pracovat se stejnou hodnotou*/
  };

  setDone = (taskId, doneUndone) => {
    const { tasks } = this.state;
    const tasksUpdated = tasks.map(x => {
      if (x.id === taskId) {
        return { ...x, isDone: doneUndone };
      } else {
        return x;
      }
    });

    const updatedForModal = tasksUpdated.find(item => item.id === taskId);

    this.setState({ tasks: tasksUpdated, showModalData: updatedForModal });
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
    const { tasks, responsibleUser } = this.state;
    // const rozsirene = tasks.concat(["se učit"]);
    //    this.setState({ tasks: rozsirene });
    const newTask = {
      taskName: ukol,
      isDone: false,
      priority: priorita,
      description: podrobnosti,
      responsible: responsibleUser,
      //id: Math.round(Math.random()*10000) //generuje náhodá čísl (Jiřinčin způsob)
      id: new Date()
    };
    const copyTasks = [...tasks, newTask]; // tři tečky jsou příkaz k vytvoření kopie z tasks
    //copyTasks.push("uuuu");
    this.setState({
      tasks: copyTasks,
      inputValue: "",
      podrobnosti: "",
      responsibleUser: "user3",
      priorita: 1
    }); //tohle nejen přepíše pole s úkoly za nové, ale i promaže řádek inputu
  };

  updateDescritpion = (newDesc, newUser, editedId) => {
    const { tasks } = this.state;
    const tasksUpdated = tasks.map(x => {
      if (x.id === editedId) {
        return { ...x, responsible: newUser, description: newDesc };
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
          <select
            value={this.state.responsibleUser}
            onChange={e => this.setState({ responsibleUser: e.target.value })}
          >
            <option value="user1">Libor Žák</option>
            <option value="user2">Žíža</option>
            <option value="user3">Onoseto Samoseto</option>
          </select>
          <textarea
            placeholder="Podrobnosti úkolu"
            className="textField"
            rows={5}
            onChange={e => this.setState({ podrobnosti: e.target.value })}
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

          <div>
            <input
              type="checkbox"
              checked={this.state.checkBoxDone}
              onChange={e => this.setState({ checkBoxDone: e.target.checked })}
            />
            <label htmlFor="filterDone">Skryj hotové </label>
            <input
              type="checkbox"
              checked={this.state.checkBoxUndone}
              onChange={e =>
                this.setState({ checkBoxUndone: e.target.checked })
              }
            />
            <label htmlFor="filterUnone">Skryj aktivní </label>
            <select>
              <option value="user1">Libor Žák</option>
              <option value="user2">Žíža</option>
              <option value="user3" selected>
                Onoseto Samoseto
              </option>
            </select>
          </div>
          <div className="tasksList">{this.renderFiltered()}</div>
        </div>

        {showModalData && (
          <Modal
            data={showModalData}
            oznacHotovo={(usedId, doneUndone) =>
              this.setDone(usedId, doneUndone)
            }
            closeModal={() => this.setState({ showModalData: undefined })}
            smaz={usedId => this.remove(usedId)}
            updateDescritpion={(newDesc, newUser, editedId) => {
              this.updateDescritpion(newDesc, newUser, editedId);
              console.log(newUser, newDesc, editedId);
            }}
          />
        )}
      </div>
    );
  }
}
export default ToDoList2;
