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


useEffect(()=>{
    Axios.get(URL)
    .then(res => {
        const firstCurrency = Object.keys(res.data.rates)[0]
        setCurrencyOptions([res.data.base, ...Object.keys(res.data.rates)])
        setFromCurrency(res.data.base)
        setToCurrency(firstCurrency)
    })
},[])


    return (
        <div>
            <h1>Currency Converter</h1>
            <InputComponent 
            selectedCurreny={fromCurrency} 
            currencyOption={currencyOption}
            onChangeCurrency={e => setFromCurrency(e.target.value)} 
             />
            <div className="equals">=</div>
            <InputComponent 
             onChangeCurrency={e => setToCurrency(e.target.value)}
             selectedCurreny={toCurrency} 
             currencyOption={currencyOption} />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"))






