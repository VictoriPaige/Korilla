
import React from 'react';
import ReactDOM from 'react-dom';
import Receipts from './Components/Receipts';
import './App.css';




function App() {
  // const [receipts, setReceipts] = useState(receipts)
  
  
  
  return (
    <div className="App">
      
      <h1>Welcome to the Korilla Receipt Database!</h1>
      
      <Receipts 
      person= 'Andre'
      main= 'Burrito'
      protein= 'Organic Tofu'
      rice= 'Purple Rice'
      sauce= 'Green Crack'
      // toppings= [
      //   'Baby Bok Choy', 'Cucumber Kimchi'
      // ],
      drink= 'Korchata'
      cost= '22'/> 
       <Receipts/>
      <Receipts/> 
  
     
    </div>
  );
}

export default App;
