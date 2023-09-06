import './ExpenseItem.css'
import Card from '../UI/Card';
import React from "react";
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    return (
      <Card>
        <div className="blog-card spring-fever">
        <div className="title-content">
          <h3><a href="#">{props.title}</a></h3>
          <div className="intro"> <a href="#">Inspiration</a> </div>
        </div>
        <div className="card-info">
          {props.amount}
          <a href="#">Read Article<span class="licon icon-arr icon-black"></span></a>
        </div>
        <div className="utility-info">
          <ul className="utility-list">
            <li><span className="licon icon-like"></span><a href="#">2</a></li>
            <li><span className="licon icon-com"></span><a href="#">12</a></li>
            <ExpenseDate date={props.date} />
            <li><span className="licon icon-tag"></span><a href="#">Photos</a>, <a href="#">Nice</a></li>
          </ul>
        </div>
        <div className="gradient-overlay"></div>
        <div className="color-overlay"></div>
      </div></Card>
);
}

export default ExpenseItem;