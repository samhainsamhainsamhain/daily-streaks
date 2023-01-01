import { habit } from "../objects/objects";

type HabitsListProps = {
  appState: habit[];
};

const HabitsList = ({ appState }: HabitsListProps) => {
  return (
    <ul>
      {appState.map((habit) => {
        return (
          <li key={habit.name}>
            <h3>{habit.name}</h3>
          </li>
        );
      })}
    </ul>
  );
};

export default HabitsList;
