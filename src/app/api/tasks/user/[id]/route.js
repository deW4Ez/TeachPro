import db from "@/lib/db"
import TaskModel from "@/models/Task"
import UserToTaskModel from "@/models/UserToTask"


export async function GET(req) {
  try{
    await db.connect()
    const id = req.nextUrl.pathname.split("/")[4]     
    const data = await UserToTaskModel.find({id_user: id})    
    const tasks = []
    await Promise.all(
      data.map(async (elem) =>{
        const task = await TaskModel.findOne({_id: elem.id_task})
        tasks.push(task)
      })
    )      
    await db.disconnect()    
    return Response.json(tasks)    
  } catch{
    console.log("No connection")
  }
}




