import moment from "moment";
import { habit } from "../../objects/objects";

type HabitProps = {
  name: string;
  habit: habit;
  saveAppState: () => void;
};

const Habit = ({ name, habit, saveAppState }: HabitProps) => {
  function checkHabit() {
    if (habit.days[364].date === moment().format("DDMMYY")) return;

    habit.days.shift();
    habit.days.push({
      date: moment().format("DDMMYY"),
      value: 1,
    });

    saveAppState();
  }

  function deleteHabit() {
    confirm("Are you sure you want to delete this habit?"); // TODO: delete habits
  }

  return (
    <div className="flex justify-between">
      <div className="text-2xl">{name}</div>
      <div className="">
        <button
          className="m-1 rounded-2xl bg-green-600 p-1 text-xs"
          onClick={checkHabit}
        >
          Check
        </button>
        <button
          className="m-1 rounded-2xl bg-red-600 p-1 text-xs"
          onClick={deleteHabit}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Habit;
