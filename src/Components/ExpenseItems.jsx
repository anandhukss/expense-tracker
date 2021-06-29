import React from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItems({ title, amount, date }) {
  //render div
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      ;
    </div>
  );
}

export default ExpenseItems;
