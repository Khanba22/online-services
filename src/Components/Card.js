import React from 'react'
import styles from "./styles/Card.module.css"
function Card(props) {
  return (
    <div className={styles.container}>
            <img src={props.src} alt="" />
            <p>{props.category}</p>
    </div>
  )
}

export default Card
