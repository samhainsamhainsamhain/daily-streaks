import { useState, useEffect } from "react";
import moment from "moment";
import HabitForm from "./components/Habit/HabitForm";
import HabitsList from "./components/Habit/HabitsList";
import { day, habit } from "./objects/objects";
import "./App.css";

function App() {
  const [appState, setAppState] = useState<habit[]>([]);
  const [timelineLength, setTimelineLength] = useState(365);

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
      days: [
        ...Array.from(new Array(365)).map((_, index) => {
          return {
            date: moment(startDate).add(index, "day").format("DDMMYY"),
            value: undefined,
          };
        }),
      ],
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

  function saveAppState() {
    localStorage.setItem("habits", JSON.stringify(appState));
  }

  const startDate = moment().add(-timelineLength, "days").toDate();
  const dateRange = [startDate, moment().add(1, "days").toDate()];

  return (
    <div className="App w-[100%]">
      <HabitForm createNewHabitHandler={createNewHabitHandler} />
      <HabitsList
        appState={appState}
        dateRange={dateRange}
        saveAppState={saveAppState}
      />
    </div>
  );
}

export default App;
