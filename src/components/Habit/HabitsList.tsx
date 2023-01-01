import { habit } from "../../objects/objects";
import Timeline from "../Timeline/Timeline";
import Habit from "./Habit";

type HabitsListProps = {
  appState: habit[];
  dateRange: Date[];
  saveAppState: () => void;
};

const HabitsList = ({ appState, dateRange, saveAppState }: HabitsListProps) => {
  return (
    <ul className="my-0 mx-auto">
      {appState.map((habit) => {
        return (
          <li className="pb-6" key={habit.name}>
            <Habit
              name={habit.name}
              habit={habit}
              saveAppState={saveAppState}
            />
            <Timeline dateRange={dateRange} habit={habit} />
          </li>
        );
      })}
    </ul>
  );
};

export default HabitsList;
