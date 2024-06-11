import { useContext, useEffect } from "react"
import { TestCheckContext } from "../TestCheck"
import styles from "./TestMainCheck.module.scss"
import { TestItemCheck } from "../../Items/TestItemCheck/TestItemCheck"

export function TestMainCheck() {

  const {dataAnswers} = useContext(TestCheckContext)
  

  return <div className={styles.container}>
    {dataAnswers?.questions?.map((elem, ind)=>{
      return <div key={ind}>
        <TestItemCheck
          question={elem}
          studentAnswer={dataAnswers?.answers[ind]}
          isCheck={true}
          index={ind}
        />
      </div>
      
    })}
  </div>
}