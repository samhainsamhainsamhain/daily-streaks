const Weekdays = () => {
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const currentDay = new Date().getDay();
  const sortedWeekdays = [
    ...weekdays.slice(currentDay - 1),
    ...weekdays.slice(0, currentDay - 1),
  ];

  return (
    <div className="grid-rows-7 grid h-[calc(7*15px)] grid-flow-col flex-wrap content-center items-start justify-center px-2">
      {sortedWeekdays.map((weekday) => (
        <div className="text-xxs mb-1 flex h-2 w-2" key={weekday}>
          {weekday}
        </div>
      ))}
    </div>
  );
};

export default Weekdays;
