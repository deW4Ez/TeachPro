import styles from "./TestItemCheck.module.scss"

export function TestItemCheck({studentAnswer, question, index}) {

  function checkAnswer(){

  }

  return <div className={styles.container}>   
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
              id={`answer_${question._id}_${ind}`}
              name={`${question._id}`}
              checked={studentAnswer === elem.answer}
              readOnly          
            />
            <label 
              className="w-full" 
              htmlFor={`answer_${question.id}_${ind}`}
            >
              {elem.answer}
            </label>
            {elem.validation ? <div className={styles.right}>Ответ</div>: studentAnswer === elem.answer ? <div className={styles.false}>Ваш ответ</div>:<></>}
          </div>
        } )
      }
    </div>: <div className={styles.typeQuest}>
      <div>
        {studentAnswer}
      </div>
      <div className={question.answers.some((elem) => elem.answer === studentAnswer) ? " text-[#61d467]" : "text-[#f04f4f]"}> 
        Ваш ответ
      </div>
      </div>}
  </div>
</div>
}