import './ExpenseItem.css'
import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem(props){
    // const [title,setTitle] = useState(props.title);
   
    // const clickHandler = ()=>{
    //     setTitle("updated");
    // }
    return (        
    <Card className="expense-item">
        <ExpenseDate date = {props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>      
             <div className='expense-item__price'>${props.amount}</div>
             {/* <button onClick={clickHandler}>change title</button> */}
        </div>
    </Card>
    );
}

export default ExpenseItem;