import './ExpenseItem.css'
import React from "react";

const ExpenseDate = (props) =>{
    const months = props.date.toLocaleDateString('en-US',{month: 'long'})
    const day = props.date.toLocaleDateString('en-US',{day: '2-digit'})
    const year = props.date.getFullYear();

    return (    
        <li><span className="licon icon-dat a"></span>
        <div className="a">
        {months}-
        </div>
        <div className="a">
        {year}-
        </div>
        <div className="a">
        {day}
        </div>
        </li>
    );


}

export default ExpenseDate;