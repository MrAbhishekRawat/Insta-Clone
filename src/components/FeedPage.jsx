import React from 'react'
import styles from './FeedPage.module.css'

export default function FeedPage() {
  const dummyPosts = [
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
  ));
  

  return (
    <div>
      {userPost}
    </div>
  )
}
