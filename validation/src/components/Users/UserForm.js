import React, { useState } from "react";
import Card from '../UI/Card';
import classes from './UserForm.module.css';
import Button from "../UI/Button";
import ErrorModel from '../UI/ErrorModel'

const UserForm = (props) => {
    const [enterdUserName, setEnterdUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');
    const addUserHandeler = (event) => {
        event.preventDefault();
        if (enterdUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title:"invalid input",
                message:"pleae provide a valid input(non empty fields)"
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title:"invalid age",
                message:"pleae provide a valid aget(age>0)"
            });
            return;
        }
        props.onAddUser(enterdUserName,enteredAge);
        setEnterdUserName('');
        setEnteredAge('');

    }

    const userNameChangeHandeler = (event) => {
        setEnterdUserName(event.target.value);
    }
    const ageChangeHandeler = (event) => {
        setEnteredAge(event.target.value);
    }
    const errorHandler = ()=>{
        setError(null)
    };
    return (
        <div>
        {error && <ErrorModel title = {error.title} message= {error.message} onClick={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandeler}>
                <label htmlFor="userName"> UserName</label>
                <input id="userName" type='text' value={enterdUserName} onChange={userNameChangeHandeler}></input>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type='number' value={enteredAge} onChange={ageChangeHandeler}></input>
                <Button type="submit"> Add User</Button>
            </form>
        </Card>
        </div>
    )
};

export default UserForm;