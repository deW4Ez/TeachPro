"use client"

import { createContext } from "react"
import styles from "./TutorSchedulePage.module.scss"
import { TutorSchedule } from "@/components/Tutor/TutorSchedule/TutorSchedule"
import { TutorScheduleExtra } from "@/components/Tutor/TutorScheduleExtra/TutorScheduleExtra"
import { useState } from "react"
import { getFilterSchedule } from "@/services/schedule.service"
import { useSession } from "next-auth/react"

export const TutorScheduleContext = createContext()

export default function TutorSchedulePage(){

  const [currentSchedule, setCurrentSchedule] = useState()
  const [role, setRole] = useState()
  const [schedule, setSchedule] = useState([]) 
  const session = useSession()

  function updateData(){
    if(session.status === "authenticated"){
      setRole(session?.data.user.name.role)
      getFilterSchedule({
        role: session?.data.user.name.role,
        id: session?.data.user.name.id
      }).then( result => {             
        setSchedule(result)
      })
    }  
  }

  return <TutorScheduleContext.Provider value={{currentSchedule, setCurrentSchedule, role, schedule, session, updateData}}>
     <div className={styles.container}>
      <div className={styles.tutorPage}>
        <TutorSchedule/>
      </div>
      <div className={styles.extraPage}>
        <TutorScheduleExtra/>
      </div>
    </div>
  </TutorScheduleContext.Provider> 
}