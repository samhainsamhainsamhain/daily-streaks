import { habit } from "../../objects/objects";

type HabitProps = {
  dateRange: Date[];
  habit: habit;
  updateHabits: (habitName: string) => void;
  deleteHabit: (habitName: string) => void;
};

const Habit = ({ habit, updateHabits, deleteHabit, dateRange }: HabitProps) => {
  function checkHabit() {
    if (
      habit.days.length &&
      habit.days[habit.days.length - 1].date ===
        dateRange[1].toISOString().slice(0, 10)
    ) {
      return;
    }

    updateHabits(habit.name);
  }

  function deleteHabitHandler() {
    if (confirm("Are you sure you want to delete this habit?"))
      deleteHabit(habit.name);

    return;
  }

  return (
    <div className="flex justify-between">
      <div className="text-2xl">{habit.name}</div>
      <div className="">
        <button
          className="m-1 rounded-2xl bg-green-600 p-1 text-xs"
          onClick={checkHabit}
        >
          Check
        </button>
        <button
          className="m-1 rounded-2xl bg-red-600 p-1 text-xs"
          onClick={deleteHabitHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Habit;
