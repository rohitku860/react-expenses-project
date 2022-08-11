
import { useState } from 'react';
import './App.css';
import UseEffect from './components/Hooks/UseEffect';
import UserForm from "./components/Users/UserForm";
import UsersList from './components/Users/UsersList'

function App() {
  const[usersList, setUsersList]=useState([]);

  const addUserHandler = (uName, uAge)=>{
    setUsersList((preUsersList)=>{
      return [...preUsersList, {name:uName, age:uAge, id:Math.random().toString()}];
    });
  };
  // return (<div>
  //   <UserForm onAddUser={addUserHandler}/>
  //   <UsersList users={usersList}/>
  // </div>

   return (<div>
    <UseEffect />
  </div>

  );
}

export default App;
