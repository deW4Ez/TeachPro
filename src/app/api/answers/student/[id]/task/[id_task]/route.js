import db from "@/lib/db"
import AnswersModel from "@/models/Answers"

export async function GET(req) {
  try{
    await db.connect()
    const paths = req.nextUrl.pathname.split("/")
    console.log(paths)
    const data = await AnswersModel.findOne({
      id_student:paths[4], 
      id_task:paths[6]
    })    
    await db.disconnect()    
    return Response.json(data)    
  } catch{
    console.log("No connection")
  }
}