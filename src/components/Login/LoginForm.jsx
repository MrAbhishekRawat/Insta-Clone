import React, { useState } from 'react'
import styles from "./LoginForm.module.css"
import igHeading from "../../assets/igHeading.png"
import { logIn } from '../Store/AuthApi';
import { useDispatch } from 'react-redux';
import { loginUser } from '../Store/AuthRedux';

function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const data = await logIn({ email, password });
      console.log("Login successful:", data);
      dispatch(loginUser(data))
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles.login} >
        <img src={igHeading} alt='igHead' />

        <input onChange={e=> setEmail(e.target.value)} 
        type='email' 
        placeholder='Email' 
        value={email}/>

        <input onChange={e=> setPassword(e.target.value)} 
        type='password' 
        placeholder='Password' 
        value={password}/>

        <button onClick={handleLogin}>Login</button>
      
    </div>
  )
}

export default LoginForm
