import moment from "moment";

type MonthProps = {
  index: number;
  startDate: any;
};

const Month = ({ index, startDate }: MonthProps) => {
  let date = moment(startDate).add(index * 7, "day");
  let monthName = date.format("MMM");
  return (
    <>
      <span
        className={`${monthName} text-xxs flex h-3 w-4 self-center align-middle`}
      >
        {monthName}
      </span>
    </>
  );
};

export default Month;
