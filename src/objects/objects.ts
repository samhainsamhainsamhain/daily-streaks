export type habit = {
  name: string;
  days: day[];
};

export type day = {
  date: string;
  value: number | undefined;
};
