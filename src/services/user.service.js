import axios from "axios";

export const createUser = async (user) =>{
  try{
    const data = await axios.post("http://localhost:3000/api/users", user)
    console.log(data.data)
  } catch (error){
    console.log(error)
  }
}

export const getUsers = async () => {
  try{
    const data = await axios.get("http://localhost:3000/api/users")
    return data
  } catch (error){
    console.log(error)
  }
}

export const getUser = async (id) => {
  try{
    const data = await axios.get(`http://localhost:3000/api/users/${id}`)     
    return data.data
  } catch (error){
    console.log(error)
  }
}

export const getRelations = async (id) => {
  const userData = await getUser(id)  
  const relations = userData.relations.map( async (student) => {    
    return await getUser(student.id).then(
      (result) => {        
        return result
      }
    )    
  })
  return Promise.all(relations)
}

export const getNameUser = async (id) => {
  try{
    const name = await getUser(id).then(result => {       
      return result.surname + " " + result.firstname
    })    
    return name
  } catch (error){
    console.log(error)
  }
}

export const postInvite = async (option) => {
  try{
    console.log(option)
    const data = await axios.post(`http://localhost:3000/api/invite`, option)
    return data.data
  } catch (error){
    console.log(error)
  }
}
