import db from "@/lib/db"
import UserModel from "@/models/User"

export async function GET(req) {
  try{
    await db.connect()
    const id = req.nextUrl.pathname.split("/")[3]      
    const data = await UserModel.findOne({_id:id}, "_id firstname surname login tasks role relations")
    await db.disconnect()
    return Response.json(data)    
  } catch{
    console.log("No connection")
  }
}

export async function PATCH(req){
  try{
    await db.connect()
    const id = req.nextUrl.pathname.split("/")[3]       
    const body = await req.json()    
    const updateUser = await UserModel.updateOne({_id:id}, body)
    await db.disconnect()
    return new Response({text: "Данные обновлены"})
  } catch (error){
    console.log("No connection")
  }
}

export async function DELETE(req){
  try{
    await db.connect()
    const id = req.nextUrl.pathname.split("/")[3] 
    const deleteUser = await UserModel.deleteOne({_id:id})
    await db.disconnect()
    return new Response({text: "Данные обновлены"})
  } catch (error){
    console.log("No connection")
  }
}