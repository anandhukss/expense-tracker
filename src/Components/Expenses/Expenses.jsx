import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";

function Expenses() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 12),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 3) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 25),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 8),
    },
  ];

  return (
    <div className="expenses">
      {expenses.map((expense) => {
        return <ExpenseItems key={expense.id} {...expense} />;
      })}
    </div>
  );
}

export default Expenses;
