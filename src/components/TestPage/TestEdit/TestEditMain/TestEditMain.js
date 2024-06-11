import { TestEditContext } from "../TestEdit"
import { useState, useContext, useEffect } from "react"
import styles from "./TestEditMain.module.scss"
import { Plus } from "lucide-react"
import { TestItem } from "../../Items/TestItem/TestItem"
import { TestItemEdit } from "../../Items/TestItemEdit/TestItemEdit"

export function TestEditMain() {

  const {questions, setQuestions, addQuestion} = useContext(TestEditContext)
  
  const editChange = (index) =>{
    const copy = Object.assign([], questions)
    copy[index].isEdit = !copy[index].isEdit
    setQuestions(copy)
  }

  return <div className={styles.container}>
    {questions && questions.map( (elem, ind)=> <div className="w-full" key={ind}>
      {elem.isEdit? 
      <TestItemEdit 
        onEditChange={editChange}
        question = {elem}
        index = {ind}      
      /> : 
      <TestItem
        onEditChange={editChange}
        question = {elem}
        index = {ind}
      />}
    </div>)}
    <div onClick={addQuestion} className={styles.addBlock}>
      <Plus size={40}/>
    </div>
  </div>
}