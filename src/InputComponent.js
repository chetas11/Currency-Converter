import React from 'react'

export default function InputComponent(props) {
    const {
    currencyOption,
    selectedCurreny,
    onChangeCurrency
    } = props
    return (
        <div>
          <input className="form-control" type="number"></input>
            <select onChange={onChangeCurrency}  value={selectedCurreny}>
                {   currencyOption.map((option)=>(
                    <option key={option} value={option}>{option}</option>
                    ))}
            </select>  
        </div>
    )
}
