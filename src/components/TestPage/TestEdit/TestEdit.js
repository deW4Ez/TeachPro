"use client"

import { createContext, useState } from "react"
import styles from "./TestEdit.module.scss"
import { TestEditSidebar } from "./TestEditSidebar/TestEditSidebar"
import { TestEditExtra } from "./TestEditExtra/TestEditExtra"
import { TestEditMain } from "./TestEditMain/TestEditMain"

export const TestEditContext = createContext()

export function TestEdit() {

  const [testPattern, setTestPattern] = useState({
    title:"",
    subject:"",
    deadline:"",
    time:""
  })

  const [questions, setQuestions] = useState([])

  const changeTitle = (newTitle) => {
    setTestPattern((pattern) => {
      pattern.title = newTitle
      return pattern
    })
  }

  const changeSubject = (newSubject) => {    
    setTestPattern((pattern) => {      
      pattern.subject = newSubject
      return pattern
    })
  }

  const changeDeadline = (newDeadline) => {
    setTestPattern((pattern) =>{
      pattern.deadline = newDeadline
      return pattern
    })
  }

  const changeTime = (newTime) => {    
    setTestPattern((pattern) => {      
      pattern.time = newTime
      return pattern
    })
  }

  const changeAnswers = (newAnswers, ind) => {
    const copy = Object.assign([], questions)
    copy[ind].answers = newAnswers
    setQuestions(copy)
  }

  const changeQuestTitle = (newTitle, ind) => {
    const copy = Object.assign([], questions)
    copy[ind].title = newTitle
    setQuestions(copy)
  }

  const changeTypeQuest = (newType, ind) => {
    const copy = Object.assign([], questions)
    copy[ind].typeQuest = newType
    copy[ind].answers = []
    setQuestions(copy)
  }

  const addAnswer = (ind) => {
    const copy = Object.assign([], questions)
    copy[ind].answers.push({
      answer:"",
      validation: questions[ind].typeQuest === "text"
    })    
    setQuestions(copy)
  }

  const deleteAnswer = (ind_quest, ind_ans) => {
    const copy = Object.assign([], questions)
    copy[ind_quest].answers.splice(ind_ans, 1)
    setQuestions(copy)
  }

  const addQuestion = () =>{
    const copy = Object.assign([], questions)
    copy.push({
      typeQuest:"radio",
      title:"",
      isEdit: true,
      answers: []
    })
    setQuestions(copy)
  }

  return <TestEditContext.Provider value={{testPattern, changeTime, changeTitle, changeDeadline, changeTypeQuest, changeSubject, questions, setQuestions, changeAnswers, changeQuestTitle, addAnswer, deleteAnswer, addQuestion}}>
    <div className={styles.container}>      
      <div className={styles.testSidebar}>
        <TestEditSidebar/>
      </div>
      <div className={styles.mainContainer}>
        <TestEditMain/>
      </div>
      <div className={styles.testExtra}>
        <TestEditExtra/>
      </div>
    </div>
  </TestEditContext.Provider>
}