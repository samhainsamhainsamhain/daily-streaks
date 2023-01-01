import moment from "moment";
import Days from "./Days";
import Month from "./Month";
import Weekdays from "./Weekdays";

type TimelineProps = {
  dateRange: Date[];
};

const Timeline = ({ dateRange }: TimelineProps) => {
  const days = Math.abs(
    moment().diff(dateRange[0], "days") - moment().diff(dateRange[1], "days")
  );
  const months: number[] = Array.from(new Array(Math.floor(days / 7)));
  const startDate = dateRange[0];
  const cellColor = "bg-gray-600";

  return (
    <div>
      <div className="flex items-start">
        <div className="m-1 flex h-3 w-3 justify-center px-3 align-middle"></div>
        <div className="flex w-[100%] pr-2">
          {months.map((_, index) => (
            <Month
              key={index}
              index={index}
              startDate={startDate}
              months={months}
            />
          ))}
        </div>
      </div>
      <div className="flex items-start border border-red-600">
        <Weekdays />
        <Days days={days} startDay={startDate} cellColor={cellColor} />
      </div>
    </div>
  );
};

export default Timeline;
