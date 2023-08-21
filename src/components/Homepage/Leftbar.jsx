import React from "react";
import { Link } from "react-router-dom";
import styles from "./Leftbar.module.css"
import { logout } from "../Store/AuthRedux"; 
import { useDispatch } from "react-redux";
import igHeading from "../../assets/igHeading.png"

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Leftbar() {

  const dispatch = useDispatch();

  const logoutHandler=()=>{
   dispatch(logout());
  };
  

  return (
    <div className={styles.container}>
      <img src={igHeading} alt='igHead' />
      <li>
      <Link to="/home"><HomeIcon/><span>Home</span></Link>
      <Link to="/search"><SearchIcon/><span>Search</span></Link>
      <Link to="/messages"><QuestionAnswerIcon/><span>Messages</span></Link>
      <Link to="/notifications"><NotificationsIcon/><span>Notifications</span></Link>
      <Link to="/reels"><SlideshowIcon/><span>Reels</span></Link>
      <Link to="/explore"><ExploreIcon/><span>Explore</span></Link>
      <Link to="/profile"><PersonIcon/><span>Profile</span></Link>
      </li>
      
      <button onClick={logoutHandler}><LogoutIcon/>Logout</button>
    </div>
  );
}
