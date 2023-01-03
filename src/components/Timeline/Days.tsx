type DaysProps = {
  daysColored: {
    date: string;
    color: string;
  }[];
};

const Days = ({ daysColored }: DaysProps) => {
  const daysWithoutToday = [...daysColored.slice(0, -1)];
  const today = [daysColored[daysColored.length - 1]];

  return (
    <div className="grid-rows-7 grid h-[calc(7*15px)] grid-flow-col flex-wrap content-center items-start justify-center">
      {daysWithoutToday.map((day, index) => {
        return <Cell key={index} day={day} />;
      })}
      {today.map((day, index) => {
        return <TodayCell key={index} day={day} />;
      })}
    </div>
  );
};

type CellProps = {
  day: {
    date: string;
    color: string;
  };
};

const Cell = ({ day }: CellProps) => {
  let cellClass = `${day.color} m-1 flex h-2 w-2 cursor-pointer justify-center self-center align-middle text-xs `;

  return <div className={cellClass}></div>;
};
// const MemoizedCell = React.memo(Cell); // TODO: NEED FIX, memo not working

const TodayCell = ({ day }: CellProps) => {
  let cellClass = `${day.color} m-1 mt-3 flex h-4 w-4 cursor-pointer justify-center self-center align-middle text-xs `;

  const todayCellIsChecked =
    day.date === new Date().toISOString().slice(0, 10) &&
    day.color === "bg-gray-600";

  console.log(todayCellIsChecked);

  return <div className={cellClass}>{todayCellIsChecked ? "?" : ""}</div>;
};

export default Days;
