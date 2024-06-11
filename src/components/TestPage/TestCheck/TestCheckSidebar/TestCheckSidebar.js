import { TestCheckContext } from "../TestCheck"
import { useContext, useEffect, useState } from "react"
import styles from "./TestCheckSidebar.module.scss"

export function TestCheckSidebar(){

  const {dataAnswers} = useContext(TestCheckContext)
  const [result, setResult] = useState({
    correct: 0,
    total: 0
  })

  const checkResult = () =>{
    let thisResult = 0;
    dataAnswers?.questions?.map((res, ind)=>{
      const correctAns = res.answers.find((elem) => elem.validation)      
      if(dataAnswers.answers[ind] === correctAns?.answer){
        thisResult+=1
      }
    })
    setResult({
      correct: thisResult,
      total: dataAnswers?.questions?.length || "0"
    })    
  }

  useEffect(()=>{
    checkResult()
  },[dataAnswers])

  return <div className={styles.container}>
    <h1>Ваш результат:</h1>
    <div className={styles.result}>
      {`${result.correct}/${result.total}`}
    </div>
    
  </div>
}