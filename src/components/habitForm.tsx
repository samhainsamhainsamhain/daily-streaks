import React, { ChangeEvent, useState } from 'react';

type HabitFormProps = {
  createNewHabitHandler: (habit: string) => void;
};

const HabitForm = ({ createNewHabitHandler }: HabitFormProps) => {
  const [newHabit, setNewHabit] = useState('');

  function submitFormHandler(event: React.FormEvent) {
    event.preventDefault();
    createNewHabitHandler(newHabit);
  }

  function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setNewHabit(event.currentTarget.value);
  }

  return (
    <form onSubmit={submitFormHandler}>
      <label htmlFor="newHabit">Enter your habit</label>
      <input id="newHabit" onChange={onChangeHandler} />
      <button type="submit">Add new Habit</button>
    </form>
  );
};

export default HabitForm;
