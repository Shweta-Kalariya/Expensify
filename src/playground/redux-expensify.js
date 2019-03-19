import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// const demoState = {
//   expenses: [
//     {
//       id: "dummy_id",
//       description: "dummy_description",
//       note: "This was a final payment of that address",
//       amount: 3452600,
//       createdAt: 0
//     }
//   ],
//   filters: {
//     text: "rent",
//     sortBy: "amount",
//     startDate: undefined,
//     endDate: undefined
//   }
// };

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id = "" } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

const setTextFilter = (text = "") => ({
  type: "TEXT_FILTER",
  text
});

const sortByAmount = () => ({ type: "SORT_BY_AMOUNT" });
const sortByDate = () => ({ type: "SORT_BY_DATE" });

const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate
});

const setEndDate = (endDate = undefined) => ({ type: "SET_END_DATE", endDate });
//Reducer
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//Get Visible Expense
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt >= startDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
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

const unsubscribe = store.subscribe(() => {
  const st = store.getState();
  const visibleExpenses = getVisibleExpenses(st.expenses, st.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({
    description: "Burger",
    note: "Shared Burger",
    amount: 3000,
    createdAt: 10
  })
);

const expenseTwo = store.dispatch(
  addExpense({
    description: "Coffee",
    note: "Starbucks",
    amount: 700,
    createdAt: 400
  })
);

const expenseThree = store.dispatch(
  addExpense({
    description: "Rent",
    note: "Tye",
    amount: 1700,
    createdAt: 100
  })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 800 }));
// store.dispatch(setTextFilter("off"));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(-100));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1000));
