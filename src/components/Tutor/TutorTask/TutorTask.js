import { useContext } from "react"
import { TutorTaskContext } from "@/app/(dashboard)/task/page"
import { TaskLine } from "@/components/TaskLine/TaskLine"
import styles from "./TutorTask.module.scss"

export function TutorTask(){
  const {tasks, currentTask, setCurrentTask, role} = useContext(TutorTaskContext) 
  
  return <div className={styles.container}>
    <h1>Мои задания</h1>
    <div className={styles.tasksBlock}>
      {tasks && tasks.map((task, ind ) =>{        
        return <TaskLine key={ind}
          task={task}
          isCurrent={task._id === currentTask?._id }
          onClick={() => setCurrentTask(task)}
        />
      })}
    </div>
  </div>
}