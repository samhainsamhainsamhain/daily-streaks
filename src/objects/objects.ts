export type habit = {
  name: string;
  color?: string;
  days: day[];
};

export type day = {
  date: string;
  value: number | undefined;
};
