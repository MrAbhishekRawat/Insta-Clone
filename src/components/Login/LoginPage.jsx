import React, { useState } from 'react'
import styles from "./LoginPage.module.css"
import leftPic from "../../assets/loginDp.png"
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

function LoginPage() {
  const [active , setActive]= useState("login")

  const handleLog=()=>{
    setActive( active=== "login" ? "signup" : "login")
   
    
  }

  return (
    <div className={styles.login} >
      <div className={styles.login_left}>
       <img src={leftPic} alt="loginDp" />
      </div>
      <div className={styles.login_right}>
        {active === "login" ? (<LoginForm/>) : (<SignupForm/>)}
        <div className={styles.login_more}>
          <span>
            {active === "login" ? 
            (<>Don't have an accont? <button onClick={handleLog}>Signup</button></>): 
            (<>Have an accont? <button onClick={handleLog}>Login</button></>)
            }
            
          </span>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
