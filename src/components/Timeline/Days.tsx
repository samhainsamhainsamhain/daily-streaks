import { useState } from "react";
import moment from "moment";
import { habit } from "../../objects/objects";

type DaysProps = {
  days: number;
  startDay: any;
  cellColor: string;
  habit: habit;
};

const Days = ({ days, cellColor, habit, startDay }: DaysProps) => {
  const cells = Array.from(new Array(days));

  return (
    <div className="grid-rows-7 grid h-[calc(7*15px)] grid-flow-col flex-wrap content-center items-start justify-center">
      {cells.map((_, index) => {
        const date = moment(startDay)
          .add(index + 1, "day")
          .format("DDMMYY");

        const coloredCell = habit.days.some((d) => {
          return d.date === date && d.value === 1;
        });

        return <Cell key={index} coloredCell={coloredCell} />;
      })}
    </div>
  );
};

type CellProps = {
  coloredCell: boolean;
};

const Cell = ({ coloredCell }: CellProps) => {
  const [isColored, setIsColored] = useState(coloredCell);

  let cellClass = `${
    isColored ? "bg-green-500" : "bg-gray-600"
  } m-1 flex h-2 w-2 cursor-pointer justify-center self-center align-middle text-xs `;

  return <div className={cellClass}></div>;
};
export default Days;
