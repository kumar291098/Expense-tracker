import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
    const {transactions}=useContext(GlobalContext);
    const amount=transactions.map(transation=>transation.amount);
    const income=amount.filter(item=>item>0).reduce((acc, item)=>(acc+=item),0).toFixed(2);
    const expenses=amount.filter(item=>item<0).reduce((acc, item)=>(acc+=item),0)*(-1).toFixed(2);
    console.log(income)
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">&#x20B9;{income} </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">&#x20B9; {expenses} </p>
            </div>

        </div>
    )
}

export default IncomeExpenses
