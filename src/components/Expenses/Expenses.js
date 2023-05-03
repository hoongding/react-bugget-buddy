import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

const Expenses = ({ data }) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredContents = [...data].filter(
    (expense) => expense.date.getFullYear() === Number(filteredYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilterYear={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredContents} />
        <ExpensesList items={filteredContents} />
      </Card>
    </div>
  );
};
export default Expenses;
