import React from 'react'
import './AddExpense.css'
import ExpenseForm from './ExpenseForm'
function AddExpense(props) {

    function newDataHandler(data) {
        const expense = {
            ...data,
            id: Math.random()
        }
        props.addNewExpense(expense)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm dataHandler={newDataHandler} />
        </div>
    )
}

export default AddExpense
