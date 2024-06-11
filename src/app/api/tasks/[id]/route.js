import db from "@/lib/db"
import TaskModel from "@/models/Task"
import UserToTaskModel from "@/models/UserToTask"


export async function GET(req) {
  try{
    await db.connect()
    const id = req.nextUrl.pathname.split("/")[3]
    const data = await TaskModel.findOne({_id:id})    
    await db.disconnect()    
    return Response.json(data)    
  } catch{
    console.log("No connection")
  }
}

export async function PUT(req){
  try{
    await db.connect()
    const body = await req.json()    
    const id = req.nextUrl.pathname.split("/")[3]    
    const updateTask = await TaskModel.findByIdAndUpdate({_id: id}, {$set:{...body}}, {new:true})
    await db.disconnect()    
    return new Response(JSON.stringify(updateTask))
  } catch (error){
    console.log(error)
  }
}

export async function PATCH(req){
  try{
    await db.connect()
    const id = req.nextUrl.pathname.split("/")[3]
    const body = await req.json()
    const updateTask = await TaskModel.updateOne({_id:id}, body)
    await db.disconnect()
    return new Response(JSON.stringify(updateTask))
  } catch (error){
    console.log("No connection")
  }
}

export async function DELETE(req){
  try{
    await db.connect()
    const id = req.nextUrl.pathname.split("/")[3] 
    await TaskModel.deleteOne({_id:id})
    await UserToTaskModel.deleteMany({id_task:id})
    await db.disconnect()
    return new Response({text: "Данные обновлены"})
  } catch (error){
    console.log("No connection")
  }
}