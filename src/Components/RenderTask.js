import React from "react";

function RenderTask(props) {
  const { ukoly } = props;
  const vysledneDivy = ukoly.map(x => (
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
            onClick={() => props.ukazPodrobnosti(x)}
          >
            Detail
          </button>
          {!x.isDone && (
            <button
              className="donButton"
              onClick={() => props.oznacHotovo(x.id)}
            >
              Done
            </button>
          )}
          <button className="delButton" onClick={() => props.smaz(x.id)}>
            Delete
          </button>
        </span>
      </div>
    </div>
  ));

  return <div>{vysledneDivy}</div>;
}
export default RenderTask;
