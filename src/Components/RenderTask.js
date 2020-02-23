import React from "react";

class renderTask extends React.Component {
  
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
}
export default renderTask;
