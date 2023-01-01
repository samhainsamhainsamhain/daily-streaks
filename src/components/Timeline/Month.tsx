import moment from "moment";

type MonthProps = {
  index: number;
  startDate: any;
  months: number[];
};

const Month = ({ index, startDate, months }: MonthProps) => {
  let date = moment(startDate).add(index * 7, "day");
  let monthName = date.format("MMM");
  return (
    <>
      <li
        className={`${monthName} text-xxs flex h-3 w-4 self-center align-middle`}
      >
        {monthName}
      </li>
    </>
  );
};

export default Month;
