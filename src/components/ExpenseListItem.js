import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt, note }) => {
  return (
    <div>
      <div>
        <Link to={`/edit/${id}`}>{description}</Link>
      </div>
      <div>
        {amount} - {createdAt}
      </div>
    </div>
  );
};

export default ExpenseListItem;
