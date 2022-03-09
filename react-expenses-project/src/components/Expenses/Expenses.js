import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from "../filter/ExpensesFilter";
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props){

 
  const [filteredYear, setFilteredYear] = useState('2022');

  const onChangeFilter = selectedItem=>{
    setFilteredYear(selectedItem);
     console.log(selectedItem);
  }
  let filtereditems = props.items.filter(ele=>ele.date.getFullYear()==filteredYear);
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return (
 <div> 
   <li>
    <Card className = "expenses">
    <ExpensesFilter selected = {filteredYear} onChangeFilter = {onChangeFilter} />
    <ExpensesChart expenses={filteredExpenses} />
   <ExpensesList items={filtereditems}  className="expenses-list"/>
    </Card>
    </li>
  </div>
    );
}
export default Expenses;