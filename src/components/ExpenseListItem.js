import React from "react";
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";

const ExpenseListItem = ({
  dispatch,
  id,
  description,
  amount,
  createdAt,
  note
}) => {
  return (
    <div>
      <div>{description}</div>
      <div>
        {amount} - {createdAt}
      </div>
      <div>
        <button onClick={() => dispatch(removeExpense({ id }))}>Remove</button>
      </div>
    </div>
  );
};

const ConnectedExpenseListItem = connect()(ExpenseListItem);

export default ConnectedExpenseListItem;
