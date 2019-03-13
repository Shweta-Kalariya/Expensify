import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

const expenseOne = store.dispatch(
  addExpense({
    description: "Water Bill",
    note: "Bill of Feb 2019",
    amount: 7000,
    createdAt: 10
  })
);

const expenseTwo = store.dispatch(
  addExpense({
    description: "Gas Bill",
    note: "Bill of Feb 2019",
    amount: 5000,
    createdAt: 12
  })
);

store.dispatch(setTextFilter("Water"));
setTimeout(() => {
  store.dispatch(setTextFilter("Bill"));
}, 3);
const st = store.getState();
console.log(getVisibleExpenses(st.expenses, st.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
