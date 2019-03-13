import React from "react";

const AddExpensePage = () => (
  <div>
    <div>
      <input type="text" placeholder="Description" required />
    </div>
    <div>
      <input type="number" placeholder="date" required />
    </div>
    <div>
      <input type="number" placeholder="amount" required />
    </div>
    <div>
      <input type="text" placeholder="Note(Optional)" />
    </div>
    <div>
      <button>Submit</button>
    </div>
  </div>
);

export default AddExpensePage;
