//Text Filter
export const setTextFilter = (text = "") => ({
  type: "TEXT_FILTER",
  text
});

//Sort By Amount
export const sortByAmount = () => ({ type: "SORT_BY_AMOUNT" });

//Sort by date
export const sortByDate = () => ({ type: "SORT_BY_DATE" });

//Set start date
export const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate
});

//Set end date
export const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate
});
