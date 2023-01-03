import React, { ChangeEvent, useState } from "react";

type HabitFormProps = {
  createNewHabit: (habit: string) => void;
};

const HabitForm = ({ createNewHabit }: HabitFormProps) => {
  const [newHabit, setNewHabit] = useState("");

  function submitFormHandler(event: React.FormEvent) {
    event.preventDefault();
    createNewHabit(newHabit);
    setNewHabit("");
  }

  function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setNewHabit(event.currentTarget.value);
  }

  return (
    <form className="p-4" onSubmit={submitFormHandler}>
      <input
        className="rounded-2xl p-3 text-gray-400 outline-none"
        id="newHabit"
        placeholder="New Habit..."
        value={newHabit}
        onChange={onChangeHandler}
      />
      <button
        className="ml-2 rounded-2xl bg-green-800 p-3 disabled:bg-red-800"
        disabled={newHabit.length ? false : true}
        type="submit"
      >
        Add new Habit
      </button>
    </form>
  );
};

export default HabitForm;
