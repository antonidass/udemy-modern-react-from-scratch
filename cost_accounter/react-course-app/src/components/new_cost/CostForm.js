import './NewCost.css'
import React, {useState} from 'react'

export default function CostForm(props) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        
        const costData = {
            id: Math.random(),
            name: name,
            amount: amount,
            date: new Date(date)
        };

        props.onSaveCostData(costData);
        setAmount('')
        setDate('')
        setName('')
    };

    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Название</label>
                <input type='text' value={name} onChange={nameChangeHandler} />
            </div>
            <div className="new-cost__control">
                <label>Сумма</label>
                <input type='number' value={amount} min='0.01' step='0.01'  onChange={amountChangeHandler} />
            </div>
            <div className="new-cost__control">
                <label>Дата</label>
                <input type='date' value={date} min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler} />
            </div> 
            <div className="new-cost__actions">
                <button type="submit">Добавить Расход</button>
                <button type="button" onClick={props.onCancel}>Отмена</button>
            </div>
        </div>
    </form>    
};
