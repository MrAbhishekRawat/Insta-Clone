import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import leftPic from "../../assets/loginDp.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import playPic from "../../assets/playstore.png";
import appstorePic from "../../assets/appstore.png";

function LoginPage() {
  const [active, setActive] = useState("login");

  const handleLog = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className={styles.login}>
      <div className={styles.login_left}>
        <img src={leftPic} alt="loginDp" />
      </div>
      <div className={styles.login_right}>
        {active === "login" ? <LoginForm /> : <SignupForm />}
        <div className={styles.login_more}>
          <span>
            {active === "login" ? (
              <>
                Don't have an account?{" "}
                <button onClick={handleLog}>Signup</button>
              </>
            ) : (
              <>
                Have an account? <button onClick={handleLog}>Login</button>
              </>
            )}
          </span>
        </div>
        <div className={styles.download}>
          <p>Get the app on</p>
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&pcampaignid=web_share">
            <img src={playPic} alt="Play Store" />
          </a>
          <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
            <img src={appstorePic} alt="App Store" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
