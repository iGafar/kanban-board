import React from "react";
import TaskBlock from "./TaskBlock";

export default function Main(props) {
  const tasksLength =
    props.backlog.length +
    props.ready.length +
    props.inProgress.length +
    props.finished.length;

  function addTask(task, column, index) {
    if (column === "Backlog") {
      props.setBacklog([...props.backlog, task]);
    } else if (column === "Ready") {
      props.setReady([...props.ready, task]);
      props.setBacklog(props.backlog.filter((el, i) => i !== index));
    } else if (column === "In Progress") {
      props.setInProgress([...props.inProgress, task]);
      props.setReady(props.ready.filter((el, i) => i !== index));
    } else {
      props.setFinished([...props.finished, task]);
      props.setInProgress(props.inProgress.filter((el, i) => i !== index));
    }
  }

  return (
    <div className="main">
      <div className="container">
        <TaskBlock
          name="Backlog"
          tasks={props.backlog}
          addTask={addTask}
          tasksLength={tasksLength}
        ></TaskBlock>
        <TaskBlock
          name="Ready"
          tasks={props.ready}
          select={props.backlog}
          addTask={addTask}
          length={props.backlog.length}
          tasksLength={tasksLength}
        ></TaskBlock>
        <TaskBlock
          name="In Progress"
          tasks={props.inProgress}
          select={props.ready}
          addTask={addTask}
          length={props.ready.length}
          tasksLength={tasksLength}
        ></TaskBlock>
        <TaskBlock
          name="Finished"
          tasks={props.finished}
          select={props.inProgress}
          addTask={addTask}
          length={props.inProgress.length}
          tasksLength={tasksLength}
        ></TaskBlock>
      </div>
    </div>
  );
}
