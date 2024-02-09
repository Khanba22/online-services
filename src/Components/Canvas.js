import React from 'react'
import gear from "../Assets/gear.png"
import serviceMen from "../Assets/serviceman.png"
import toolBox from "../Assets/tool box.png"
import dropDown from "../Assets/Drop Down.png"
import Navbar from "../Components/Navbar"
import styles from "./styles/Canvas.module.css"
function Canvas(props) {
  return (
    <div style={{transform:`translateY(${props.transform})`}} className={styles.canvas}>
                <Navbar style = {{color:"var(--fontColor)"}}/>
                <div className={styles.content}>
                    <h3>Your One-Stop Solution Hub:</h3>
                    <div><div className={styles.shadow}></div><h1>All Services,</h1></div>
                    <h1>Every Need.</h1>
                </div>
                <div className={styles.topLeft}>
                    <img src={gear} alt="" />
                    <img src={gear} alt="" />
                    <img src={gear} alt="" />
                </div>
                <div className={styles.topRight}>
                    <hr />
                    <h2>Servico</h2>
                </div>
                <div className={styles.bottomLeft}>
                    <img src={toolBox} alt="" />
                </div>
                <div className={styles.bottomRight}>
                    <img src={serviceMen} alt="" />
                </div>
                <div className={styles.bottomCircle}>
                    <img src={dropDown} onClick={()=>{
                        props.setTransform("-100vh")
                    }} alt="" />
                </div>
            </div>
  )
}

export default Canvas
