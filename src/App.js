import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
function App() {
  const [fromCurrency, setFromCurrency] = useState('INR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount,setAmount] = useState();
  const [result,setResult] = useState();
  const [exchangeRate , setExchangeRate] = useState();

  useEffect(()=>{
    const getExchangeRate = async ()=>{
      try{
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const res = await axios.get(url);
        console.log(res);
        setExchangeRate(res.rate.toCurrency);
        setResult()
      }catch(error){
        console.error("error fetching exchange rate:",error);
  }}
  getExchangeRate();
},[fromCurrency,toCurrency]);
  const handleAmountChange = (e) =>{
    setAmount(parseFloat(e.target.value));
  }
  const handleFromCurrency = (e) =>{
    setFromCurrency(e.target.value);
  }
  const handleToCurrency = (e) =>{
    setToCurrency(e.target.value);
  }
  return (
    <div>
      <div className="container">
        <div className="box">Currency converter</div>
        <div className="convert">
          <label htmlFor="amt">Amount</label>
          <input type="number" id='amt' onChange={handleAmountChange}/>
          <label htmlFor="from">Currency</label>
          <select id="from" onChange={handleFromCurrency}>
            <option value="INR">INR - Indian Rupees</option> 
            <option value="AED">AED - United arab emirates dinar</option> 
            <option value="AFN">AFN - Afghanistan afghani</option> 
            <option value="EUR">EUR - European Euro</option> 
            <option value="INR">INR - Indian Rupees</option> 
          </select>
          <label htmlFor="to">Currency</label>
          <select id="to" onChange={handleToCurrency}>
            <option value="USD">USD - United states Dollar</option> 
            <option value="INR">INR - Indian Rupees</option> 
            <option value="AED">AED - United arab emirates dinar</option> 
            <option value="AFN">AFN - Afghanistan afghani</option> 
            <option value="EUR">EUR - European Euro</option>  
          </select>
          <p>{amount} {fromCurrency} is equal to {result} {toCurrency} </p>
        </div>
      </div>
    </div>
  );
}

export default App;
