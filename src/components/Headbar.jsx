import React from 'react'
import styles from "./Headbar.module.css"
import FeedPage from './FeedPage';

function Headbar() {
    const dummyUsers= [
        {id: "1",
         name: "user1",
          imageUrl: "https://i.pinimg.com/1200x/87/67/64/8767644bc68a14c50addf8cb2de8c59e.jpg"
        },
        {
            id: "2",
            name: "user2",
             imageUrl: "https://i.pinimg.com/1200x/87/67/64/8767644bc68a14c50addf8cb2de8c59e.jpg"
        },
        {
            id: "3",
            name: "user3",
             imageUrl: "https://i.pinimg.com/1200x/87/67/64/8767644bc68a14c50addf8cb2de8c59e.jpg"
        },
        {
            id: "4",
            name: "user4",
             imageUrl: "https://i.pinimg.com/1200x/87/67/64/8767644bc68a14c50addf8cb2de8c59e.jpg"
        },
        {
            id: "5",
            name: "user5",
             imageUrl: "https://i.pinimg.com/1200x/87/67/64/8767644bc68a14c50addf8cb2de8c59e.jpg"
        },
        {id: "1",
        name: "user1",
         imageUrl: "https://i.pinimg.com/1200x/87/67/64/8767644bc68a14c50addf8cb2de8c59e.jpg"
       },
       {
           id: "2",
           name: "user2",
            imageUrl: "https://i.pinimg.com/1200x/87/67/64/8767644bc68a14c50addf8cb2de8c59e.jpg"
       },
       {
           id: "3",
           name: "user3",
            imageUrl: "https://i.pinimg.com/1200x/87/67/64/8767644bc68a14c50addf8cb2de8c59e.jpg"
       },
       {
           id: "4",
           name: "user4",
            imageUrl: "https://i.pinimg.com/1200x/87/67/64/8767644bc68a14c50addf8cb2de8c59e.jpg"
       },
       {
           id: "5",
           name: "user5",
            imageUrl: "https://i.pinimg.com/1200x/87/67/64/8767644bc68a14c50addf8cb2de8c59e.jpg"
       },
       {id: "1",
       name: "user1",
        imageUrl: "https://i.pinimg.com/1200x/87/67/64/8767644bc68a14c50addf8cb2de8c59e.jpg"
      },
      {
          id: "2",
          name: "user2",
           imageUrl: "https://i.pinimg.com/1200x/87/67/64/8767644bc68a14c50addf8cb2de8c59e.jpg"
      },
      {
          id: "3",
          name: "user3",
           imageUrl: "https://i.pinimg.com/1200x/87/67/64/8767644bc68a14c50addf8cb2de8c59e.jpg"
      },
      {
          id: "4",
          name: "user4",
           imageUrl: "https://i.pinimg.com/1200x/87/67/64/8767644bc68a14c50addf8cb2de8c59e.jpg"
      },
      {
          id: "5",
          name: "user5",
           imageUrl: "https://i.pinimg.com/1200x/87/67/64/8767644bc68a14c50addf8cb2de8c59e.jpg"
      },


    ]

    const userList = dummyUsers.map((user) => (
      <div key={user.id} className={styles.userItem}>
        <img src={user.imageUrl} alt="dp" />
        <h2>{user.name}</h2>
      </div>
    ));

  return (
    <div className={styles.container}>
      <div className={styles.userList}>
      {userList}
    </div>
    <div className={styles.feeds}>
        <FeedPage/>
      </div>
    </div>
  )
}

export default Headbar
