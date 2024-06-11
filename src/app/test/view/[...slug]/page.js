"use client"

import { TestCheck } from "@/components/TestPage/TestCheck/TestCheck";
import { useState, useEffect } from "react";
import { getAnswers, getTask } from "@/services/task.service";

export default function TestViewPage({params:{slug}}){

  const [test, setTest] = useState()
  const [dataAnswers, setDataAnswers] = useState()

  useEffect(()=>{    
    getTask(slug[1]).then(result => {           
      setTest(result)
      getAnswers(slug[0],slug[1]).then(resultAns =>{
        console.log(slug)             
        setDataAnswers({
          questions: result.questions,
          answers: resultAns.answers
        })  
      })     
    })   
  },[])
  
  return <div>
    {dataAnswers && <TestCheck dataAnswers={dataAnswers} test={test}/>}
  </div>
}