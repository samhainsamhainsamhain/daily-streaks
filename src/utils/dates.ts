export function getDatesInRange(dateRange: Date[]): string[] {
  const date = new Date(dateRange[0].getTime());

  const dates = [];

  while (date <= dateRange[1]) {
    dates.push(new Date(date).toISOString().slice(0, 10));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

export function getDateRange(timelineLength: number): Date[] {
  const startDate = new Date(
    new Date().setDate(new Date().getDate() - (timelineLength - 1))
  );
  const endDate = new Date();

  return [startDate, endDate];
}

export function getMonthName(index: number, startDate: Date) {
  let result = new Date(startDate);
  result.setDate(result.getDate() + index * 7);
  return result.toLocaleString("en-Gb", { month: "short" });
}
