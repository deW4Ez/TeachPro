import { CircleUser } from "lucide-react";
import { Settings } from "lucide-react";
import styles from "./PersonLine.module.scss"

export function PersonLine({person, current, setCurrent}){
  return <div 
    onClick={() => setCurrent(person)} 
    className={current?._id === person._id ? styles.container_chosen : styles.container}
  >
    <div className={styles.subContainer}>
      <CircleUser size={40}/>
      <div className={styles.dataBlock}>
        <div className={styles.name}>{person.surname + " " + person.firstname}</div>
        <div className={styles.subject}>{person.subject}</div>
      </div>
    </div>    
    <Settings size={40}/>
  </div>
}