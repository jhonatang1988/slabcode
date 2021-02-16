function daysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

export const createMonth = () => {
  const today: Date = new Date();
  const todayMonth: number = today.getMonth() + 1;
  const todayYear: number = today.getFullYear();
  const N: number = daysInMonth(todayMonth, todayYear);
  return [...Array(N + 1).keys()].slice(1);
};
