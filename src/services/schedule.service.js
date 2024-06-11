import axios from "axios"

export const getSchedule = async () => {
  try{
    const data = await axios.get("http://localhost:3000/api/schedule")    
    return data.data
  } catch (error){
    console.log("Connection error", error)
  } 
}

export const addSchedule = async (schedule) => {
  try{
    console.log(schedule)
    const data = await axios.post("http://localhost:3000/api/schedule", schedule)
    console.log(data.data)
  } catch (error){
    console.log(error)
  }
}

export const putSchedule = async (schedule) => {
  try{
    const {_id, ...dataSchedule} = schedule
    const data = await axios.put(`http://localhost:3000/api/schedule/${_id}`, dataSchedule)
    console.log(data.data)  
  } catch (error){
    console.log(error)
  }
}

export const getFilterSchedule = async (options) => {
  try{
    const schedule = await axios.get(`http://localhost:3000/api/schedule/${options.role}/${options.id}`)    
    const filter = [...new Set(schedule.data.map(res => res.date))]
    const currentSchedule = {}
    schedule.data.map(elem => {
          filter.map(date => {
            if(elem.date === date){
              if (!currentSchedule[date]){
                currentSchedule[date] = []
              }
              currentSchedule[date].push(elem)
            }
          }) 
        })    
    return currentSchedule
  } catch (error){
    console.log("Connection error", error)
  } 
}