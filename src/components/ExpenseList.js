import React from "react";
import { connect } from "react-redux";
import expenses from "../selectors/expenses";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map(expense => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStateToProps = state => {
  return { expenses: expenses(state.expenses, state.filters) };
};
const ConnectdExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectdExpenseList;
