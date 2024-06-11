import db from "@/lib/db"
import ScheduleModel from "@/models/Schedule"


export async function GET(req) {
  try{
    await db.connect()
    const id = req.nextUrl.pathname.split("/")[3] 
    const data = await ScheduleModel.find({_id:id})
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
    const updateTask = await ScheduleModel.findByIdAndUpdate({_id: id}, {$set:{...body}},
    {new:true})
    await db.disconnect()    
    return new Response(JSON.stringify(updateTask))
  } catch (error){
    console.log(error)
  }
}

export async function DELETE(req){
  try{
    await db.connect()      
    const id = req.nextUrl.pathname.split("/")[3]     
    const deleteTask = await ScheduleModel.deleteOne({_id: id})
    await db.disconnect()    
    return new Response(JSON.stringify(deleteTask))
  } catch (error){
    console.log(error)
  }
}