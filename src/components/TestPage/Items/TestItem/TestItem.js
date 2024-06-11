import { Edit } from "lucide-react"
import styles from "./TestItem.module.scss"

export function TestItem({onEditChange, question, index, isCheck}) {

  const handle = () =>{
    onEditChange(index)
  }

  return <div className={styles.container}>
  {!isCheck && <div className={styles.edit}>
    <div onClick={handle} className={styles.check}>
      <Edit/>
    </div>      
  </div>}   
  <div className={styles.questBlock}>    
    <h1>{question.title}</h1>
    <hr></hr>
    {question.typeQuest === "radio" ? <div>
      {
        question.answers.map( (elem, ind) => {
          return <div key={ind} className={styles.input}>
            <input
              value={elem.answer}
              type="radio"
              id={`answer_${question.id}_${ind}`}
              name={`${question.id}`}
              checked={elem.validation}
              readOnly          
            />
            <label 
              className="w-full" 
              htmlFor={`answer_${question.id}_${ind}`}
            >
              {elem.answer}
            </label>
            {elem.validation && <div className={styles.right}>Ответ</div>}
          </div>
        } )
      }
    </div>:<div className={styles.questBlockText}>
      <div>Введите ответ</div>
      <input
        type="text"
      />
      </div>}
  </div>
</div>
}