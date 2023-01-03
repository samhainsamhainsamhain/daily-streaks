import { useState, useEffect } from "react";

import HabitForm from "./components/Habit/HabitForm";
import HabitsList from "./components/Habit/HabitsList";

import { getDateRange, getDatesInRange } from "./utils/dates";

import { habit } from "./objects/objects";

import "./App.css";

function App() {
  const [days, setDays] = useState<string[]>([]);
  const [habits, setHabits] = useState<habit[]>([]);
  const [timelineLength, setTimelineLength] = useState<number>(365);

  const dateRange = getDateRange(timelineLength);

  useEffect(() => {
    setHabits(JSON.parse(localStorage.getItem("habits") || "[]"));
    setDays(getDatesInRange(dateRange));
  }, []);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  return (
    <div className="App w-[100%]">
      <HabitForm createNewHabit={createNewHabit} />
      <HabitsList
        habits={habits}
        dateRange={dateRange}
        updateHabits={updateHabits}
        deleteHabit={deleteHabit}
        timelineLength={timelineLength}
        days={days}
      />
    </div>
  );

  // State handling

  function createNewHabit(habitName: string) {
    const newHabits = [...habits];

    if (habitExists(habitName)) {
      console.log("habit already exists"); //TODO: throw error to user
      return;
    }

    newHabits.push({
      name: habitName,
      days: [],
    });

    setHabits(newHabits);
  }

  function habitExists(habit: string): boolean {
    if (habits.find((e) => e.name === habit)) {
      return true;
    }

    return false;
  }

  function updateHabits(habitName: string) {
    let updatedHabits = [...habits];
    const date = new Date().toISOString().slice(0, 10);

    updatedHabits.map((habit) => {
      if (
        habit.name === habitName &&
        (!habit.days.length || habit.days[habit.days.length - 1].date !== date)
      ) {
        habit.days.push({ date, value: 1 });
      }
    });

    setHabits(updatedHabits);
  }

  function deleteHabit(habitName: string) {
    const updatedHabits = [...habits].filter(
      (habit) => habit.name !== habitName
    );
    setHabits(updatedHabits);
  }
}

export default App;
