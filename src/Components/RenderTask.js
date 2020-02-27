import React from "react";
import Button from "@material-ui/core/Button";

function RenderTask(props) {
  const { ukoly } = props;
  const vysledneDivy = ukoly.map(x => (
    <div
      className={`task priority${x.priority} ${x.isDone ? "done" : ""}`}
      key={x.id}
    >
      <div className="taskRow">
        <span className="text">
          {x.priority} {x.taskName}
        </span>
        <span>
          <Button
            variant="outlined"
            color="primary"
            className="delButton"
            style={{ textDecoration: "none" }}
            onClick={() => props.ukazPodrobnosti(x)}
          >
            Detail
          </Button>
          {/* <button
            className="delButton"
            onClick={() => props.ukazPodrobnosti(x)}
          >
            Detail
          </button> */}
        </span>
      </div>
    </div>
  ));

  return <div>{vysledneDivy}</div>;
}
export default RenderTask;
