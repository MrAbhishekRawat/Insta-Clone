import React from 'react'
import styles from './FeedPage.module.css'
import { Avatar } from '@mui/material';
import MoreHorizIcon  from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export default function FeedPage({user, feedPic, like, timestamp}) {

  return (
    <div className={styles.feedpage}>
      <div className={styles.feed_header}>
        <div className={styles.fh_left}>
        <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
         {user} . <span> {timestamp} </span>
        </div>
         <MoreHorizIcon/>
      </div>

      <div className={styles.feed_pic}>
          <img src= {feedPic} alt='' />
      </div>

      <div className={styles.feed_footer}>
          <div className={styles.footer_mainIcon}>
            <FavoriteBorderIcon className={styles.eachIcon}/>
            <ChatBubbleOutlineIcon className={styles.eachIcon}/>
            <TelegramIcon className={styles.eachIcon}/>
          </div>
          <div className={styles.footer_saveIcon}>
            <BookmarkBorderIcon/>
          </div>
          
      </div>
      <p>Liked by {like} people. </p>
    </div>
  )
}
