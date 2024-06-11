import { useContext, useEffect } from "react"
import { TestEditContext } from "../TestEdit"
import styles from "./TestEditSidebar.module.scss"

export function TestEditSidebar(){

  const {changeTime, changeTitle, changeDeadline, changeSubject} = useContext(TestEditContext)

  const handleTime = (e) =>{
    changeTime(e.target.value) 
  }

  const handleTitle = (e) => {
    changeTitle(e.target.value)
  }

  const handleDeadline = (e) => {
    changeDeadline(e.target.value)
  }

  const handleSubject = (e) => {
    changeSubject(e.target.value)
  }

  return <div className={styles.outContainer}>
    <div className={styles.container}>
      <h2>Время теста (в секундах):</h2>
      <input onChange={handleTime} className={styles.time}/>  
    </div>
    <div className={styles.taskInfo}>
      <div className={styles.subInfo}>
        <h1>Тема</h1>
        <input onChange={handleTitle} type="text"/>
      </div>
      <div className={styles.subInfo}>
        <h1>Предмет</h1>
        <input onChange={handleSubject} type="text"/>
      </div>
      <div className={styles.subInfo}>
        <h1>Дедлайн</h1>
        <input onChange={handleDeadline} type="date"/>
      </div>
    </div>
  </div>
  
}