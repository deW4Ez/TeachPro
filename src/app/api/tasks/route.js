import db from "@/lib/db"
import TaskModel from "@/models/Task"
import UserToTaskModel from "@/models/UserToTask"

export async function POST(req){  
  try{
    await db.connect()     
    const {id_users, ...body} = await req.json()    
    const newTask = await TaskModel.create(body)
    id_users.map(async (elem) => await UserToTaskModel.create({
      id_user: elem,
      id_task: newTask._id
    }))
    await db.disconnect()    
    return new Response(newTask._id)
  } catch (error){
    console.log("No connection")
  }  
}