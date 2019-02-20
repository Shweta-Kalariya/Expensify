import { createStore, combineReducers } from "redux";

const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);

console.log(store.getState());
const demoState = {
  expenses: [
    {
      id: "dummy_id",
      description: "dummy_description",
      note: "This was a final payment of that address",
      amount: 3452600,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};
