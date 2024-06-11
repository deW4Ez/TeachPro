"use client"

import { createContext, useEffect, useState } from "react"
import styles from "./TutorTaskPage.module.scss"
import { TutorTask } from "@/components/Tutor/TutorTask/TutorTask"
import { TutorTaskExtra } from "@/components/Tutor/TutorTaskExtra/TutorTaskExtra"
import { getTasks } from "@/services/task.service"
import { useSession } from "next-auth/react"

export const TutorTaskContext = createContext()

export default function TutorTaskPage(){

  const [tasks, setTasks] = useState()
  const [currentTask, setCurrentTask] = useState()
  const session = useSession()
  const [role, setRole] = useState()  

  useEffect( ()=> {
    if(session.status === "authenticated"){
      getTasks(session.data?.user.name.id).then(result => setTasks(result))
      setRole(session.data?.user.name.role) 
    }   
  },[session])

  return <TutorTaskContext.Provider value={{tasks, setTasks, currentTask,setCurrentTask, role}}>
     <div className={styles.container}>
      <div className={styles.tutorPage}>
        <TutorTask/>
      </div>
      <div className={styles.extraPage}>
        <TutorTaskExtra/>
      </div>
    </div>
  </TutorTaskContext.Provider>
 
}