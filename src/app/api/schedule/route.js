import db from "@/lib/db"
import ScheduleModel from "@/models/Schedule"

export async function POST(req){  
  try{
    await db.connect()
    const body = await req.json()
    const newTask = await ScheduleModel.create(body)
    await db.disconnect()  
    return new Response(newTask)
  } catch (error){
    console.log("No connection")
  }  
}
