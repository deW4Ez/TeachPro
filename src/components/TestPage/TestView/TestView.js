"use client"

import { useState, useEffect, createContext } from "react"
import { TestSidebar } from "./TestSidebar/TestSidebar"
import { TestMainBlock } from "./TestMainBlock/TestMainBlock"
import { TestExtraBlock } from "./TestExtraBlock/TestExtraBlock"
import styles from "./TestView.module.scss"
import { getTask } from "@/services/task.service"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"
import { addTestAnswers } from "@/services/task.service";

export const TestContext = createContext()

export function TestView({slug}) {
  
  const [test, setTest] = useState()
  const [currentTime, setCurrentTime] = useState()
  const [studentAnswers, setStudentAnswers] = useState([])
  const session = useSession()
  const router = useRouter()

  const handleSend = async () =>{    
    const answers = {       
        id_student: session.data.user.name.id,
        id_task: slug,
        answers: studentAnswers
    }   
    await addTestAnswers(answers)      
    router.replace(`/test/view/${session.data.user.name.id}/${slug}`)     
  }
  

  useEffect(()=>{      
    getTask(slug).then(response => {
      console.log(response)
      setTest(response)})    
  },[])

  useEffect(()=>{
    setCurrentTime(() => test?.time)
  },[test])
  
  const handleAnswer = (e, ind) => {    
    const data = Object.assign([], studentAnswers)
    data[ind] = e.target.value
    setStudentAnswers(data)    
  }
  return <TestContext.Provider value={{test, setTest, currentTime, setCurrentTime, studentAnswers, handleAnswer, handleSend}}>
    {test && <div className={styles.container}>      
      <div className={styles.testSidebar}>
        <TestSidebar/>
      </div>
      <div className={styles.mainContainer}>
        <TestMainBlock/>
      </div>
      <div className={styles.testExtra}>
        <TestExtraBlock/>
      </div>
    </div>}
  </TestContext.Provider>  
}