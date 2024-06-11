import db from "@/lib/db"
import UserModel from "@/models/User"

export async function POST(req) {
  try{
    await db.connect()
    const option = await req.json()    
    const tutor = await UserModel.findOne({_id: option.id_tutor}, "_id surname firstname relations role")
    const student = await UserModel.findOne({_id: option.id_student}, "_id relations role")
    if(student.role === "tutor" || 
      tutor.role === "student"){
      return Response.json({status:"not-access"})
    }
    if(!(tutor.relations.some((elem) => elem.id.toString() === student._id.toString()))){      
      tutor.relations.push({id: option.id_student})
      student.relations.push({id: option.id_tutor})
      await UserModel.updateOne({_id:option.id_tutor}, {relations: tutor.relations})
      await UserModel.updateOne({_id:option.id_student}, {relations: student.relations})
    } else {
      return Response.json({
        status:"linked",
        tutor: tutor
      }) 
    }
    await db.disconnect()
    return Response.json({
      status:"access",
      tutor: tutor
    })    
  } catch{
    console.log("No connection")
  }
}