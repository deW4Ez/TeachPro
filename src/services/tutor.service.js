"use server"

import db from "@/lib/db";
import { getServerSession } from "next-auth";
import UserModel from "@/models/User";



export const getStudents = async () => {
  try{
    const session = await getServerSession() 
    // const data = await axios.get("http://localhost:3000/api/user")
    await db.connect()    
    const data = await UserModel.findOne({login: 
      session.user?.name.login      
    })
    await db.disconnect()
    const tempData = []
    data.relations.map((elem) => {
      tempData.push(elem)
    })    
    console.log(tempData)
    return 
  } catch (error){
    console.log(error)
  }
}

export const addStudent = async ({loginStudent}) => {
  const student = await UserModel.findOne({login: loginStudent})
  const check = data.relations.find((elem) => 
      elem.id.toString() === student._id.toString()
    )
    if(!check){
      data.relations.push({id: student._id, subject:"Информатика"})
      data.save()
      return {result: "Успешно добавлено"}
    } else {
      return {result: "Такой пользователь уже добавлен"}
    }
}