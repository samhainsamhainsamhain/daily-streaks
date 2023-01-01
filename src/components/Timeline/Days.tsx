type DaysProps = {
  days: number;
  startDay: any;
  cellColor: string;
};

const Days = ({ days, cellColor }: DaysProps) => {
  const cells = Array.from(new Array(days));
  return (
    <div className="grid-rows-7 grid h-[calc(7*15px)] grid-flow-col flex-wrap content-center items-start justify-center">
      {cells.map((_, index) => (
        <Cell key={index} cellColor={cellColor} />
      ))}
    </div>
  );
};

type CellProps = {
  cellColor: string;
};

const Cell = ({ cellColor }: CellProps) => {
  return (
    <div
      className={`${cellColor} m-1 flex h-2 w-2 cursor-pointer justify-center self-center align-middle text-xs`}
    ></div>
  );
};
export default Days;
