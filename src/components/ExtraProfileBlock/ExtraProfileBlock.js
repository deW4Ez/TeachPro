import { CircleUser } from "lucide-react";
import styles from "./ExtraProfileBlock.module.scss"

export function ExtraProfileBlock({person}){
  return <div className={styles.container}>
    <CircleUser size={40}/>
    <div>
      <div className={styles.name}>{person?.surname + " " + person?.firstname}</div>
      <div>{person?.subject}</div>
    </div>
  </div>
}