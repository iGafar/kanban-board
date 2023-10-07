import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  const [activeTasks, setActiveTasks] = React.useState(0);
  const [finishedTasks, setFinishedTasks] = React.useState(0);

  return (
    <div className="wrapper">
      <Header />
      <Main
        setActiveTasks={setActiveTasks}
        activeTacks={activeTasks}
        setFinishedTasks={setFinishedTasks}
        finishedTasks={finishedTasks}
      />
      <Footer activeTasks={activeTasks} finishedTasks={finishedTasks} />
    </div>
  );
}

export default App;
