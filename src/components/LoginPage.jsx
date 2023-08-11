import React from "react";
import styles from "./LoginPage.module.css"
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  
  function loginHandler() {
    navigate("/home")
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <h1>Instagram</h1>
      <div className={styles.control}>
        <label></label>
        <input placeholder="Phone, Username or email" type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label></label>
        <input placeholder="Password" type="text" id="password" />
      </div>
      <h2 > Forgot Password? </h2>
      <button onClick={loginHandler}>Log In </button>
      <p1>OR</p1>
      <h3 >Login with Facebook</h3>
      <div className={styles.myLine}></div>
      <p2>
        Don't Have an Account? <p3 className={styles.p3}>SignUp</p3>
      </p2>
      </div>
    </div>
  );
}
