import db from "@/lib/db"
import ScheduleModel from "@/models/Schedule"


export async function GET(req) {
  try{
    await db.connect()
    const id = req.nextUrl.pathname.split("/")[4]
    const data = await ScheduleModel.find({id_tutor: id})
    await db.disconnect()    
    return Response.json(data)
  } catch{
    console.log("No connection")
  }
}