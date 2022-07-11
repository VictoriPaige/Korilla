
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import Customers from './Components/Receipts';
import {receipt1, receipt2, receipt3, rec} from "./Components/Records"
import './App.css';


function App() {

const [receipts, setReceipts] = useState([receipt1, receipt2, receipt3, ...rec])
const mappedReceipts = receipts.map((receipt, index)=> {
  return <Customers receipt = {receipt}></Customers>
})
  
  
  return (
    <div className="App">
      
      <h1>Welcome to the Korilla Receipt Database!</h1>
      
    {mappedReceipts}
     
    </div>
  );
}

export default App;
