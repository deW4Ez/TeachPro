import db from "@/lib/db"
import AnswersModel from "@/models/Answers"

export async function POST(req){  
  try{
    await db.connect()
    const body = await req.json()
    const newTask = await AnswersModel.create(body)
    await db.disconnect()  
    return new Response(newTask)
  } catch (error){
    console.log("No connection")
  }  
}