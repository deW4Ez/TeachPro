import axios from "axios"

export const getTasks = async (id) => {
  try{    
    const dataResult = []
    await axios.get(`http://localhost:3000/api/tasks/user/${id}`).then( result => {
      result.data.map( elem => {
        const {questions, time, ...data} = elem
        dataResult.push(data)
      })
    })   
    return dataResult
  } catch (error){
    console.log("Connection error", error)
  } 
}

export const addTask = async (task) => {
  try{
    const data = await axios.post("http://localhost:3000/api/tasks", task)    
    return data.data   
  } catch (error){
    console.log(error)
  }
}

export const getTask = async (id) => {
  try{    
    const data = await axios.get(`http://localhost:3000/api/tasks/${id}`)    
    return data.data
  } catch (error){
    console.log(error)
  }
}

export const addTestAnswers = async (currentAnswers) => {
  try{       
    const data = await axios.post(`http://localhost:3000/api/answers`, currentAnswers)    
    return data.data
  } catch (error){
    console.log(error)
  }
}

export const getAnswers = async (id_student, id_task) => {
  try{
    const data = await axios.get(`http://localhost:3000/api/answers/student/${id_student}/task/${id_task}`)
    return data.data
  } catch (error){
    console.log(error)
  }
}

export const getAnswersStudent = async (id_student) => {
  try {
    const data = await axios.get(`http://localhost:3000/api/answers/student/${id_student}`)
    return data.data
  } catch (error){
    console.log(error)
  }
}