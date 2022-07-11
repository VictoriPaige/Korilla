import React from "react";
import{useState} from "react"

 function Customers(props){
console.log(props.receipt)
    const [paid, setPaid] = useState(props.receipt.paid)
    
    if (props.receipt.paid){
return null
    }

    else{
        return <div onClick = {(event)=> {
            props.receipt.paid = true 
          setPaid(props.receipt.paid)
      }} >
        <h1>Name:{props.receipt.person}</h1>
        <h3><span>Order:</span> {props.receipt.order.main}</h3>
        <h3><span>Protein:</span> {props.receipt.order.protein} </h3>
        <h3><span>Rice:</span>{props.receipt.order.rice}</h3>
        <h3><span>Sauce:</span> {props.receipt.order.sauce}</h3>
        <h3><span>Drink:</span> {props.receipt.order.drink}</h3>
        <h3><span>Cost:</span> {props.receipt.order.cost}</h3>
        

        
        </div>
    }
 }
export default Customers