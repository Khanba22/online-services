import React, { useRef, useState } from 'react'
import styles from "./pageStyles/HomePage.module.css"
import Canvas from '../Components/Canvas'
import Card from '../Components/Card'
import mechanic from "../Assets/Tools.png"
import cook from "../Assets/Chef Hat.png"
import fuse from "../Assets/Fuse Symbol.png"
import plumber from "../Assets/Plumber.png"

function HomePage() {

    const [transform, setTransform] = useState("0vh")
    const [carsel,setCarsel] = useState(-33)
    const carousel = useRef()
    const handleCarousel = (sign)=>{
        if(sign === "+"){
            setCarsel(carsel+33)
        }
        if (sign === '-') {
            setCarsel(carsel-33)
        }
    }

    return (
        <div className={styles.container}>
            <Canvas transform={transform} setTransform={setTransform} />
            <div className={styles.mainContent}>
                <h1>Choose A Category</h1>
                <div style={{transform:`translateX(${carsel}%)`}} ref={carousel} className={styles.carousel}>
                    <div  className={styles.cardHolder}>
                        <Card category="Mechanic" src={mechanic} />
                        <Card category="Cook" src={cook} />
                        <Card category="Electrician" src={fuse} />
                        <Card category="Plumber" src={plumber} />
                    </div>
                    <div className={styles.cardHolder}>
                        <Card category="Mechanic" src={mechanic} />
                        <Card category="Cook" src={cook} />
                        <Card category="Electrician" src={fuse} />
                        <Card category="Plumber" src={plumber} />
                    </div>
                    <div className={styles.cardHolder}>
                        <Card category="Mechanic" src={mechanic} />
                        <Card category="Cook" src={cook} />
                        <Card category="Electrician" src={fuse} />
                        <Card category="Plumber" src={plumber} />
                    </div>
                </div>
                <button onClick={()=>{
                    handleCarousel("+")
                }}>Forward</button>
                <button onClick={()=>{
                    handleCarousel("-")
                }}>Backward</button>
            </div>
        </div>
    )
}

export default HomePage
