import db from "@/lib/db"
import AnswersModel from "@/models/Answers"

export async function GET(req) {
  try{
    await db.connect()
    const id = req.nextUrl.pathname.split("/")[4]
    const data = await AnswersModel.find({id_student:id})    
    await db.disconnect()    
    return Response.json(data)    
  } catch{
    console.log("No connection")
  }
}