import { useContext, useState } from "react"
import styles from "./TestItemEdit.module.scss"
import { Check } from "lucide-react"
import { TestEditContext } from "../../TestEdit/TestEdit"
import { X } from "lucide-react"
import { Plus } from "lucide-react"
import { Trash2 } from "lucide-react"

export function TestItemEdit({onEditChange, question, index }){

  const {changeAnswers, changeQuestTitle, addAnswer, deleteAnswer, changeTypeQuest} = useContext(TestEditContext)

  const [typeQuest, setTypeQuest] = useState(question.typeQuest)

  const handle = () =>{
    onEditChange(index)
  }

  const changeType = (e) => {
    changeTypeQuest(e.target.value, index)
  }

  const onChangeAnswer = (e) =>{
    const copy = Object.assign([], question.answers)
    copy[e.target.id].answer = e.target.value    
    changeAnswers(copy, index)
  }

  const changeValidate = (ind) =>{
    if (question.typeQuest === "radio"){
      const copy = Object.assign([], question.answers)
      copy.map((elem, elem_ind) => {
        elem.validation = (elem_ind === ind)
      })
      changeAnswers(copy, index)
    }    
  }

  return <div className={styles.container}>
    <div className={styles.edit}>
      <div onClick={handle} className={styles.check}>        
        <Check/>        
      </div>
      <select onChange={changeType} className={styles.typeQuest} defaultValue={typeQuest}>
        <option value="radio">Выбор ответа</option>
        <option value="text">Развернутый ответ</option>
      </select>     
    </div>    
    <div className={styles.questBlock}>      
      <input 
        type="text" 
        onChange={(e) => changeQuestTitle(e.target.value, index)} placeholder="Введите вопрос" 
        defaultValue={question.title} 
      />
      {question.typeQuest === "radio" ? <div className={styles.questBlock}>
        <div>Добавьте варианты ответа</div>
        {question.answers.map( (elem, ind) =>{
          return <div key={ind} className={styles.answerBlock}>
            <div onClick={()=> changeValidate(ind)} className={styles.validation}>
              {question.answers[ind].validation ? <Check color="#61d467" /> : <X color="red"/> }
            </div>
            <input            
              onChange={ e => onChangeAnswer(e)}
              defaultValue={elem.answer}
              id={ind}          
            />          
            <div onClick={()=> deleteAnswer(index, ind)} className={styles.validation}>
              <Trash2/>
            </div>
          </div>        
        })}
        <div onClick={() => addAnswer(index)} className={styles.addVariant}>
          <>Добавить вариант</>
          <Plus/>
        </div>
      </div>: <div className={styles.questBlock}>
        <div>Добавьте варианты корректного ответа</div>
        {question.answers.map( (elem, ind) =>{
          return <div key={ind} className={styles.answerBlock}>
            <div onClick={()=> changeValidate(ind)} className={styles.validation}>
              {question.answers[ind].validation ? <Check color="#61d467" /> : <X color="red"/> }
            </div>
            <input            
              onChange={ e => onChangeAnswer(e)}
              defaultValue={elem.answer}
              id={ind}          
            />          
            <div onClick={()=> deleteAnswer(index, ind)} className={styles.validation}>
              <Trash2/>
            </div>
          </div>        
        })}
        <div onClick={() => addAnswer(index)} className={styles.addVariant}>
          <>Добавить вариант</>
          <Plus/>
        </div>      
        </div>}
    </div>
  </div>
}