import React from 'react'

const IncomeExpenses = () => {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+&#x20B9;0.00</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-&#x20B9;0.00</p>
            </div>

        </div>
    )
}

export default IncomeExpenses
