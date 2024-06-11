"use client"

import { TutorGroup } from "@/components/Tutor/TutorGroup/TutorGroup"
import styles from "./TutorGroupPage.module.scss"
import { TutorGroupExtra } from "@/components/Tutor/TutorGroupExtra/TutorGroupExtra"
import { createContext, useEffect, useState } from "react"
import { getRelations } from "@/services/user.service"
import { useSession } from "next-auth/react"


export const TutorPageContext = createContext()

export default function TutorGroupPage(){

  const [group, setGroup] = useState([])
  const session = useSession()
  
  useEffect(()=>{     
    if(session.status === "authenticated"){      
      getRelations(session.data?.user.name.id).then( res => setGroup(res))
    }   
  },[session])

  const [currentGroup, setCurrentGroup] = useState()

  return <TutorPageContext.Provider value={{group, setGroup, currentGroup, setCurrentGroup}}>
    <div className={styles.container}>
      <div className={styles.tutorPage}>
        <TutorGroup/>
      </div>
      <div className={styles.extraPage}>
        <TutorGroupExtra/>
      </div>
    </div>
  </TutorPageContext.Provider>
  
}