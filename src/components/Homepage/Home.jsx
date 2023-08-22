import React, { useState } from "react";
import Leftbar from "./Leftbar";
import styles from "./Home.module.css";
import FeedPage from "./FeedPage";
import Suggestions from "./Suggestions";

export default function Home() {
  const dummyUsers = [
    {
      user: "abhi",
      feedPic:
        "https://www.edgemagazine.net/wp-content/uploads/2019/07/polegatto.jpg",
      likes: 20,
      timestamp: "2hr",
    },
    {
      user: "om",
      feedPic:
        "https://www.edgemagazine.net/wp-content/uploads/2019/07/polegatto.jpg",
      likes: 40,
      timestamp: "4d",
    },
    {
      user: "sunny",
      feedPic:
        "https://www.edgemagazine.net/wp-content/uploads/2019/07/polegatto.jpg",
      likes: 55,
      timestamp: "1min",
    },
  ];

  const [feeds, setFeed] = useState(dummyUsers);

  return (
    <div className={styles.container}>
      <div className={styles.leftbar}>
        <Leftbar />
      </div>
      <div className={styles.centreBar}>
        {feeds.map((feed) => (
          <FeedPage
            user={feed.user}
            feedPic={feed.feedPic}
            like={feed.likes}
            timestamp={feed.timestamp}
          />
        ))}
      </div>
      <div className={styles.rightbar}>
        <Suggestions/>
      </div>
    </div>
  );
}
