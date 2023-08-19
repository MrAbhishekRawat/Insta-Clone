import React, { useState } from "react";
import styles from "./SignupForm.module.css";
import igHeading from "../../assets/igHeading.png";
import { createAccount } from "../Store/AuthApi";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const data = await createAccount({ email, password });
      console.log("Signup successful:", data);
    } catch (error) {
      alert(error)
    }
  };

  return (
    <div className={styles.signup}>
      <img src={igHeading} alt="igHead" />

      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />

      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        value={username}
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default SignupForm;
