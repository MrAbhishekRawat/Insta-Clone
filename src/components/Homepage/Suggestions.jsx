import { Avatar } from '@mui/material'
import styles from './Suggestions.module.css'
import React from 'react'

function Suggestions() {
  return (
    <div className={styles.suggestions}>
        <div className={styles.suggestion_title}>Suggestion for you</div>
        <div className={styles.suggestion_users}>
            <div className={styles.suggestion_user}>
                <div className={styles.sugestion_user_left}>
                    <span className={styles.avatar}>
                        <Avatar>A</Avatar>
                    </span>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>abhi. </span>
                        <span className={styles.relation}> New To ig</span>
                    </div>
                </div>
            </div>
            <button >Follow</button>
        </div>
        

        <div className={styles.suggestion_users}>
            <div className={styles.suggestion_user}>
                <div className={styles.sugestion_user_left}>
                    <span className={styles.avatar}>
                        <Avatar>A</Avatar>
                    </span>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>abhi. </span>
                        <span className={styles.relation}> New To ig</span>
                    </div>
                </div>
            </div>
            <button >Follow</button>
        </div>
        

        <div className={styles.suggestion_users}>
            <div className={styles.suggestion_user}>
                <div className={styles.sugestion_user_left}>
                    <span className={styles.avatar}>
                        <Avatar>A</Avatar>
                    </span>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>abhi. </span>
                        <span className={styles.relation}> New To ig</span>
                    </div>
                </div>
            </div>
            <button >Follow</button>
        </div>
        

        
      
    </div>
  )
}

export default Suggestions
