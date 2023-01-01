import { useState, useEffect } from "react";
import "./App.css";
import HabitForm from "./components/HabitForm";
import HabitsList from "./components/HabitsList";
import { habit } from "./objects/objects";

function App() {
  const [appState, setAppState] = useState<habit[]>([]);

  useEffect(() => {
    setAppState(JSON.parse(localStorage.getItem("habits") || "[]"));
  }, []);

  function createNewHabitHandler(habit: string) {
    const newState = [...appState];

    if (habitExists(habit)) {
      console.log("habit already exists"); //TODO: throw error to user
      return;
    }

    newState.push({
      name: habit,
      days: [],
    });

    setAppState(newState);
    localStorage.setItem("habits", JSON.stringify(newState));
  }

  function habitExists(habit: string) {
    if (appState.find((e) => e.name === habit)) {
      return true;
    }

    return false;
  }

  return (
    <div className="App">
      <HabitForm createNewHabitHandler={createNewHabitHandler} />
      <HabitsList appState={appState} />
    </div>
  );
}

export default App;
