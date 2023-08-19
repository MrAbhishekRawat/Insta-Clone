import React from "react";
import { Link } from "react-router-dom";
import styles from "./Leftbar.module.css"

export default function Leftbar() {
  return (
    <div className={styles.container}>
      <h1>Instagram</h1>
      <li>
      <Link to="/home">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/messages">Messages</Link>
      <Link to="/notifications">Notifications</Link>
      <Link to="/reels">Reels</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/profile">Profile</Link>

      </li>
      
    </div>
  );
}
