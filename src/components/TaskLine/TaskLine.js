import { getDay, getMonth } from "@/lib/dateParse";
import styles from "./TaskLine.module.scss"
import { NotebookPen } from 'lucide-react';
import { SquarePen } from 'lucide-react';
import { X, Check } from "lucide-react";



export function TaskLine({task, onClick, isStudent=false, isCompleted=false, isCurrent = false }){
  return <div
    onClick={onClick}
    className={ isCurrent ? styles.container_chosen :styles.container}
    >
    <div className={styles.subContainer}>
      <NotebookPen size={30}/>
      <div>
        <div>{task?.title}</div>
        <div>{task?.subject}</div>
      </div>
    </div>
    <div className={styles.subContainer}>
      <div>{`до ${getDay(task?.deadline)}.${getMonth(task?.deadline)}`}</div>
      {!isStudent ? <SquarePen/>: isCompleted ? <Check color="green" /> : <X color="red" />}
    </div>    
  </div>
}