"use client"

import { useContext } from "react"
import { TestContext } from "../TestView"
import styles from "./TestSidebar.module.scss"
import { CountdownCircleTimer } from "react-countdown-circle-timer"

export function TestSidebar(){

  const {currentTime, handleSend} = useContext(TestContext)

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      handleSend()
    }
    let minutes = Math.floor(remainingTime / 60)
    let seconds = remainingTime % 60
  
    if(minutes < 10) minutes = "0" + minutes.toString()
    if(seconds < 10) seconds = "0" + seconds.toString()
  
    return (
      <div>        
        <div>{`${minutes}:${seconds}`}</div>        
      </div>
    );
  };

  return <div className={styles.container}>
      <h2>Оставшееся время:</h2>
      <div className={styles.time}>
        {currentTime && <CountdownCircleTimer
          isPlaying
          key={"123"}
          duration={currentTime}
          colors={['#73f359', '#c3e95a', '#f7b24b', '#f53a3a']}
          colorsTime={[currentTime, currentTime/2, currentTime/4, 0]}
          trailColor="#342B39"
        >
        {renderTime}
        </CountdownCircleTimer>}
      </div>     
    </div>
}