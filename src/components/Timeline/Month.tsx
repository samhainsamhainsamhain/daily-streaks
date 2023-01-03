import { getMonthName } from "../../utils/dates";

type MonthProps = {
  index: number;
  startDate: any;
};

const Month = ({ index, startDate }: MonthProps) => {
  let monthName = getMonthName(index, startDate);
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
