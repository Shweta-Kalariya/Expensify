import React from "react";

const EditExpensePage = props => (
  <div>
    <p>This is edit expense page for id {props.match.params.id}!</p>
  </div>
);

export default EditExpensePage;
