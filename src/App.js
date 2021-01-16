import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import InputComponent from './InputComponent'
import './App.css'
import Axios from 'axios'

const URL = 'https://api.exchangeratesapi.io/latest'
 



function App() {

const [currencyOption, setCurrencyOptions] = useState([]);
const [fromCurrency, setFromCurrency] = useState()
const [toCurrency, setToCurrency] = useState()
const [exchangeRate, setExchangeRate] = useState()
const [amount, setAmount]= useState(1);
const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

let toAmount, fromAmount

if(amountInFromCurrency){
    fromAmount= amount,
    toAmount = amount*exchangeRate
}else{
    toAmount = amount,
    fromAmount= amount / exchangeRate
}

function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
}

function handleToAmountChange(e){
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
}




useEffect(()=>{
    Axios.get(URL)
    .then(res => {
        const firstCurrency = Object.keys(res.data.rates)[0]
        setCurrencyOptions([res.data.base, ...Object.keys(res.data.rates)])
        setFromCurrency(res.data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(res.data.rates[firstCurrency])
    })
},[])

useEffect(()=>{
    if(fromCurrency!=null && toCurrency!=null){
        Axios.get(`${URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => {
            setExchangeRate(res.data.rates[toCurrency])
        })
    }
},[fromCurrency,toCurrency])


    return (
        <div>
            <h1>Currency Converter</h1>
            <InputComponent 
            selectedCurreny={fromCurrency} 
            currencyOption={currencyOption}
            onChangeCurrency={e => setFromCurrency(e.target.value)} 
            amount={fromAmount}
            onChangeAmount = {handleFromAmountChange}
             />
            <div className="equals">=</div>
            <InputComponent 
             onChangeCurrency={e => setToCurrency(e.target.value)}
             selectedCurreny={toCurrency} 
             currencyOption={currencyOption}
             amount={toAmount}
             onChangeAmount = {handleToAmountChange} />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"))






