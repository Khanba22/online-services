import React from 'react'
import styles from  "./styles/Navbar.module.css"
import { Link } from 'react-router-dom'
function Navbar(props) {
  return (
    <div className={styles.container}>
      <div  className={styles.linkContainer}>
            <Link style={props.style}>Home</Link>
            <Link style={props.style}>Services</Link>
            <Link style={props.style}>About Us</Link>
            <button><Link>Sign Up</Link></button>
      </div>
    </div>
  )
}

export default Navbar
