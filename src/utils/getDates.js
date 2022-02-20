export const getDates = () => {
  const initialDate = new Date(Date.now() - 3600 * 1000 * 24 * 1),
    endDate = new Date(Date.now() + 3600 * 1000 * 24 * 3),
    arrDate = [],
    dayMilliSec = 24 * 60 * 60 * 1000;
  for (
    let q = initialDate;
    q <= endDate;
    q = new Date(q.getTime() + dayMilliSec)
  ) {
    arrDate.push(q);
  }
  return arrDate;
};

export const today = (date) => {
  const today = new Date(Date.now());
  return date == today ? "today" : "";
};

export const getTime = () => {
  const initialTime = new Date(Date.now() - 3600 * 1000 * 3),
    endTime = new Date(Date.now() + 3600 * 1000 * 3),
    arrTime = [],
    dayMilliSec = 60 * 60 * 1000;

    for (
      let q = initialTime;
      q <= endTime;
      q = new Date(q.getTime() + dayMilliSec)
    ) {
      arrTime.push(q.toLocaleString("en-US", { hour: "numeric", hour12: true }));
    }
    return arrTime;

};
