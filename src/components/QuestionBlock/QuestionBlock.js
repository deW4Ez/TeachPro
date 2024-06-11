"use client"

import styles from "./QuestionBlock.module.scss"

export function QuestionBlock({question, onClick, index}){

  return <div className={styles.container}>
    <h1>
      {question.title}
    </h1>
    <hr></hr>
    {question.typeQuest === "radio" ? <div>
      {question.answers.map((elem, ind)=> {
          return <div key={ind} className={styles.input}>
              <input 
                onClick={(e)=>onClick(e, index)} 
                value={elem.answer} 
                type="radio" 
                id={`answer_${question._id}_${ind}`} 
                name={`${question._id}`}
              />
              <label 
                className="w-full" 
                htmlFor={`answer_${question._id}_${ind}`}
              >
                {elem.answer}
              </label>            
            </div>
        }
      )}            
    </div> : <div>
      <input
        onChange={(e) => onClick(e, index)}
        className={styles.typeQuest}
      />
      </div>}
  </div>
}