import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpenseChart';

function Expenses(props) {

    const [year, setYear] = useState('2020');

    function selectedOptionHandler(data) {
        setYear(data);
    }
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === year;
    });
    let nrExpenses = props.items.filter(number => number.date.getFullYear().toString() === year).length;
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={year} optionSelected={selectedOptionHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpenseList expenseItems={props.items} nrExpenses={nrExpenses} year={year} />
            </Card>
        </div>
    );
}

export default Expenses;