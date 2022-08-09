import './CostForm.css'
import CostForm  from './CostForm'
import React, {useState} from 'react'

export default function NewCost(props) {
    const [isFormVisible, setIsFormVisible] = useState(false)

    const saveCostDataHandler = (inputData) => {
        props.onAddCost(inputData)
        setIsFormVisible(false)
    }

    const inputCostDataHandler = () => {
        setIsFormVisible(true)
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false)
    }

    return (
        <div className="new-cost">
            {!isFormVisible && <button type='button' onClick={inputCostDataHandler}>Добавить новый Расход</button>}
            {isFormVisible && <CostForm onCancel={cancelCostHandler} onSaveCostData={saveCostDataHandler}/> }
        </div>
    );
};
