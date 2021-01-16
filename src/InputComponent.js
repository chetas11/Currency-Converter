import React from 'react'

export default function InputComponent(props) {
    const {
    currencyOption,
    selectedCurreny,
    onChangeCurrency,
    onChangeAmount,
    amount

    } = props
    return (
        <div>
          <input onChange={onChangeAmount} value={amount} className="form-control" type="number"></input>
            <select onChange={onChangeCurrency}  value={selectedCurreny}>
                {   currencyOption.map((option)=>(
                    <option key={option} value={option}>{option}</option>
                    ))}
            </select>  
        </div>
    )
}
