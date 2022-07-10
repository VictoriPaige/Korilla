import React from "react";
import Records from "./Records";

export default function Receipts(props){

return(
    <div className="receipt">
        <h1>{props.person}</h1>
        <h3>{props.main}</h3>
        <h3>{props.protein} </h3>
        <h3>{props.rice}</h3>
        <h3>{props.sauce}</h3>
        <h3>{props.drink}</h3>
        <h3>{props.cost}</h3>
        
</div> 

)}

