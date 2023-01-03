import Habit from "./Habit";
import Timeline from "../Timeline/Timeline";

import { habit } from "../../objects/objects";

type HabitsListProps = {
  days: string[];
  habits: habit[];
  dateRange: Date[];
  timelineLength: number;
  updateHabits: (habitName: string) => void;
  deleteHabit: (habitName: string) => void;
};

const HabitsList = ({
  days,
  habits,
  dateRange,
  timelineLength,
  updateHabits,
  deleteHabit,
}: HabitsListProps) => {
  return (
    <ul className="my-0 mx-auto">
      {habits.map((habit) => {
        return (
          <li className="pb-6" key={habit.name}>
            <Habit
              dateRange={dateRange}
              deleteHabit={deleteHabit}
              habit={habit}
              updateHabits={updateHabits}
            />
            <Timeline
              dateRange={dateRange}
              habits={habits}
              habit={habit}
              timelineLength={timelineLength}
              days={days}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default HabitsList;
