import db from "@/lib/db"
import UserModel from "@/models/User"

export async function GET(req) {
  try{
    await db.connect()
    const options = req.nextUrl.searchParams.get("login") ? {login: req.nextUrl.searchParams.get("login")} : {}
    console.log(req.nextUrl)
    const data = await UserModel.find(options, "_id firstname surname login tasks role relations")
    await db.disconnect()
    return Response.json(data)    
  } catch{
    console.log("No connection")
  }
}

export async function POST(req){  
  try{
    await db.connect()
    const body = await req.json()
    const newUser = await UserModel.create(body)
    await db.disconnect()  
    return new Response(newUser)
  } catch (error){
    console.log("No connection")
  }  
}
