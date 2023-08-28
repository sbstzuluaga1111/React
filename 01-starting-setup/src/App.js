import React from "react";
import ExpenseItem  from "./components/Expenseltem";
import Card from "./components/Card";

function App() {
  /* const para = document.createElement('p');
  para.textContent = 'This is also visible'
  document.getElementById('root').append(para); */

  const expenses = [
    {
      id: 1,
      title: 'Car Insurance', 
      amount: 294.67,  
      date: new Date(2023, 8, 24)
    },
    {
      id: 2,
      title: 'Car montain', 
      amount: 294.689,  
      date: new Date(2123, 5, 25)
    },
    {
      id: 3,
      title: 'Car river', 
      amount: 29545.67,  
      date: new Date(2022, 7, 34)
    },
    {
      id: 4,
      title: 'Car ocean', 
      amount: 2921.67,  
      date: new Date(2020, 4, 2)
    },
  ];

return (
  React.createElement('div',{},React.createElement,('h2'),{},'Lets get started'),
  
    <Card>
      <ExpenseItem title={expenses [0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses [1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses [2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses [3].title} amount={expenses[3].amount} date={expenses[3].date} />
    </Card>
  ); 
}

export default App;
