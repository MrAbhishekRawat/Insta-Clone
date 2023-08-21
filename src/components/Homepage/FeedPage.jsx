import React from 'react'
import styles from './FeedPage.module.css'
import { Avatar } from '@mui/material';
import MoreHorizIcon  from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export default function FeedPage() {
  /*const dummyPosts = [
    {
      id:"p1",
      user: "user1",
      postURL: "https://www.dsc.edu.in/wp-content/uploads/2023/06/dummy-image.jpg"
    },
    {
      id:"p2",
      user: "user2",
      postURL: "https://www.dsc.edu.in/wp-content/uploads/2023/06/dummy-image.jpg"
    },
    {
      id:"p3",
      user: "user3",
      postURL: "https://www.dsc.edu.in/wp-content/uploads/2023/06/dummy-image.jpg"
    },
    {
      id:"p4",
      user: "user4",
      postURL: "https://www.dsc.edu.in/wp-content/uploads/2023/06/dummy-image.jpg"
    },
    {
      id:"p5",
      user: "user5",
      postURL: "https://www.dsc.edu.in/wp-content/uploads/2023/06/dummy-image.jpg"
    },
    {
      id:"p6",
      user: "user6",
      postURL: "https://www.dsc.edu.in/wp-content/uploads/2023/06/dummy-image.jpg"
    }
  ]

  const userPost = dummyPosts.map((post) => (
    <div key={post.id} className={styles.container} >
      <h2>{post.user}</h2>
      <img src={post.postURL} alt="postedPic" />
    </div>
  ));*/
  

  return (
    <div className={styles.feedpage}>
      <div className={styles.feed_header}>
        <div className={styles.fh_left}>
        <Avatar>A</Avatar>
         user_anony <span> .10hr</span>
        </div>
         <MoreHorizIcon/>
      </div>

      <div className={styles.feed_pic}>
          <img src='https://www.edgemagazine.net/wp-content/uploads/2019/07/polegatto.jpg' alt='' />
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
      <p>Liked by 10 people</p>
    </div>
  )
}
