import { useState, useEffect } from "react";

import Days from "./Days";
import Month from "./Month";
import Weekdays from "./Weekdays";

import { habit } from "../../objects/objects";

type TimelineProps = {
  dateRange: Date[];
  timelineLength: number;
  habits: habit[];
  habit: habit;
  days: string[];
};

const Timeline = ({
  dateRange,
  habits,
  habit,
  timelineLength,
  days,
}: TimelineProps) => {
  const [daysColored, setDaysColored] = useState(
    calculateColoredDays(days, habit)
  );

  useEffect(() => {
    setDaysColored(calculateColoredDays(days, habit));
  }, [habits]);

  const months: any[] = Array.from(new Array(Math.floor(timelineLength / 7)));

  return (
    <div>
      <div className="flex items-start">
        <div className="m-1 flex h-3 w-3 justify-center px-3 align-middle"></div>
        <div className="flex w-[100%] pr-2">
          {months.map((_, index) => (
            <Month key={index} index={index} startDate={dateRange[0]} />
          ))}
        </div>
      </div>
      <div className="flex items-start border border-red-600">
        <Weekdays />
        <Days daysColored={daysColored} />
      </div>
    </div>
  );
};

function calculateColoredDays(days: string[], habit: habit) {
  return days.map((day) => {
    if (habit.days.some((d) => d.date === day))
      return {
        date: day,
        color: habit.color || "bg-green-500",
      };

    return {
      date: day,
      color: "bg-gray-600",
    };
  });
}

export default Timeline;
