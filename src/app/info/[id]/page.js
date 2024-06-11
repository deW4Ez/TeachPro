"use client"

import { HeaderInfo } from "@/components/PageInfo/HeaderInfo/HeaderInfo"
import styles from "./PageInfo.module.scss"
import { createContext, useEffect } from "react"
import { getUser } from "@/services/user.service"
import { useState } from "react"
import { ScheduleBlock } from "@/components/PageInfo/ScheduleBlock/ScheduleBlock"
import { TaskInfo } from "@/components/PageInfo/TaskInfo/TaskInfo"
import { ArrowLeft } from 'lucide-react';
import { useRouter } from "next/navigation"

export const InfoContext = createContext()

export default function PageInfo({params:{id}}){

  const [person, setPerson] = useState()
  const [debt, setDebt] = useState(0)
  const router = useRouter()

  useEffect(()=>{
    getUser(id).then(result => {      
      setPerson(result)
    })
  }, [])

  return <InfoContext.Provider value={{person, debt, setDebt, id}}>    
    {person && <div className={styles.container}>
      <div className={styles.backLine}>
        <div
          onClick={()=> router.back()}
          className={styles.backArrow}
        >
          <ArrowLeft/>
          Вернуться
        </div>
      </div>
        <div className={styles.headerBlock}>
          <HeaderInfo/>
        </div>
        <div className={styles.infoBlock}>
          <div>
            <ScheduleBlock/>
          </div>         
          <div>
            <TaskInfo/>
          </div>          
        </div>
    </div>}
  </InfoContext.Provider>
  
  
}