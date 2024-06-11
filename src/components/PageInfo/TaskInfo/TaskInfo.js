import { useContext, useEffect, useState } from "react"
import styles from "./TaskInfo.module.scss"
import { InfoContext } from "@/app/info/[id]/page"
import { getAnswersStudent, getTasks } from "@/services/task.service"
import { TaskLine } from "@/components/TaskLine/TaskLine"
import { useRouter } from "next/navigation"

export function TaskInfo(){

  const [tasks, setTasks] = useState()
  const [answers, setAnswers] = useState([])
  const {person} = useContext(InfoContext)
  const router = useRouter()
  useEffect(()=>{
    getTasks(person._id).then(result => {
      setTasks(result)          
    })
    getAnswersStudent(person._id).then(result => {
      setAnswers(result)
    })
  },[])

  const handleAnswers = (task) =>{
    if(answers.some(answer => answer.id_task === task._id))
      router.push(`/test/view/${person._id}/${task._id}`)
  }

  return <div className={styles.container}>
    <h1>Задания</h1>
    <div className={styles.tasksBlock}>
      {tasks && tasks.map((task, ind ) =>{             
        return <TaskLine key={ind}
          task={task}
          isStudent={true}
          isCompleted={answers.some(answer => answer.id_task === task._id)}
          onClick={() => handleAnswers(task)}
        />
      })}
    </div>
  </div>
}