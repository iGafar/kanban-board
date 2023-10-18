import React, { useState, useEffect } from "react";
import TaskBlock from "./TaskBlock";
import TaskDescription from "./TaskDescription";

export default function Main(props) {
  function useLocalStorage(columnName) {
    const [state, setState] = useState(() =>
      localStorage.getItem(columnName)
        ? JSON.parse(localStorage.getItem(columnName))
        : []
    );

    useEffect(() => {
      localStorage.setItem(columnName, JSON.stringify(state));
    }, [state]);

    return [state, setState];
  }

  const [backlog, setBacklog] = useLocalStorage('backlog');
  const [ready, setReady] = useLocalStorage('ready');
  const [inProgress, setInPropgress] = useLocalStorage('in_progress');
  const [finished, setFinished] = useLocalStorage('finished');

  props.setActiveTasks(backlog.length);
  props.setFinishedTasks(finished.length);

  function addTask(task, column) {
    if (column === "backlog") {
      setBacklog([...backlog, task]);
    } else if (column === "ready") {
      setReady([...ready, task]);
      setBacklog(backlog.filter((el) => el !== task));
    } else if (column === "in_progress") {
      setInPropgress([...inProgress, task]);
      setReady(ready.filter((el) => el !== task));
    } else {
      setFinished([...finished, task]);
      setInPropgress(inProgress.filter((el) => el !== task));
    }
  }

  return (
    <div className="main">
      <div className="container">
        <TaskBlock name="Backlog" tasks={backlog} addTask={addTask}></TaskBlock>
        <TaskBlock
          name="Ready"
          tasks={ready}
          select={backlog}
          addTask={addTask}
        ></TaskBlock>
        <TaskBlock
          name="In Progress"
          tasks={inProgress}
          select={ready}
          addTask={addTask}
        ></TaskBlock>
        <TaskBlock
          name="Finished"
          tasks={finished}
          select={inProgress}
          addTask={addTask}
        ></TaskBlock>
        {/* <TaskDescription  /> */}
      </div>
    </div>
  );
}
