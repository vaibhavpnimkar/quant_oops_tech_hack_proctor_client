import dayjs from "dayjs";

export const DATE_FORMAT = "D MMMM, YYYY hh:mm A";
export const SDFormat = (date: string) => {
  try {
    return dayjs(date).format(DATE_FORMAT);
  } catch (e) {
    return null;
  }
};
