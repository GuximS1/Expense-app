import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'
function ExpenseList(props) {
    if (props.nrExpenses === 0)
        return (
            <h2 className='expenses-list__fallback'>Found no expenses.</h2>
        )
    return (
        <ul className='expenses-list'>
            {props.expenseItems.filter(number => number.date.getFullYear().toString() === props.year).map(item => (
                <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
            ))}
        </ul>
    )
}

export default ExpenseList
