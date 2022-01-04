import React, { useState } from 'react'
import './ExpenseForm.css'
function ExpenseForm(props) {

    // const [title, setTitle] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');

    const [openModal, setOpenModal] = useState(false);
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })
    const [dummyDate, setDummyDate] = useState(null);
    function titleHandler(event) {
        setUserInput((prev) => {
            return {
                ...prev,
                title: event.target.value,
            };
        })
    }
    function amountHandler(event) {
        setUserInput((prev) => {
            return {
                ...prev,
                amount: +event.target.value,
            };
        })
    }
    function dateHandler(event) {
        setUserInput((prev) => {
            return {
                ...prev,
                date: new Date(event.target.value)
            };

        });
        setDummyDate(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        if (userInput.date !== '') {
            props.dataHandler(userInput);

            setUserInput((prev) => {
                return {
                    title: '',
                    amount: '',
                    date: ''
                }
            })
        }
        setDummyDate('');
    }

    function modalHandler() {
        setOpenModal(!openModal)
        setUserInput((prev) => {
            return {
                title: '',
                amount: '',
                date: ''
            }
        })
        setDummyDate('');
    }

    if (!openModal)
        return (
            <button onClick={modalHandler}>Add Expense</button>
        )
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                    <input type="text" value={userInput.title} onChange={titleHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Amount</label>
                    <input type="number" value={userInput.amount} min={0.01} step={0.01} onChange={amountHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Date</label>
                    <input value={dummyDate} type="date" min="01-01-2019" max="31-12-2022" onChange={dateHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={modalHandler} >Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>

        </form>
    )
}

export default ExpenseForm
