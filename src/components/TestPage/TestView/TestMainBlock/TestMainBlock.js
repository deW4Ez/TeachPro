"use client"

import { useContext} from "react"
import { TestContext } from "../TestView"
import { QuestionBlock } from "@/components/QuestionBlock/QuestionBlock"
import styles from "./TestMainBlock.module.scss"


export function TestMainBlock(){

  const {test, handleAnswer} = useContext(TestContext)

  return <div className={styles.container}>
    <h1>{test.title}</h1>
    {test.questions.map((question, ind) => <div className="w-full" key={ind}>
      <QuestionBlock onClick={handleAnswer} index={ind} question={question}/> 
    </div>    
    )}    
  </div> 
}