import React from 'react';
import { validation } from './validation.js';

export default function Form() {
    const [userData, setUserData] = React.useState({
        username:"",
        password:""
    });
    const [errors, setErrors] = React.useState({
        username:"",
        password:""
    });

   function handleImputChange(e){
    setUserData({...userData,[e.target.name]: e.target.value}); setErrors(validation({...userData,[e.target.name]:e.taget.value}));

   } 

  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input
            id="username" 
            name='username'
            placeholder='Ingrese el Usuario'
            type="text"
            value={userData.username}
            onChange={handleImputChange}
            />
            <p>{errors.username}</p>
        <label htmlFor="password">Password:</label>
        <input 
            id="password"
            name='pasword'
            type='password'
            value={userData.password}
            onChange={handleImputChange}
            />
            <p>{errors.password}</p>
        <input type="submit"/>
      </form>
    </div>
  );
}
