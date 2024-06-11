"use client"
import { TestView } from "@/components/TestPage/TestView/TestView"
import { getAnswers, getTask } from "@/services/task.service"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function TestPage({params:{slug}}){

  const session = useSession()
  const router = useRouter()

  useEffect(()=>{
    const id = session.data?.user.name.id
    getAnswers(id, slug).then(result =>{      
      if(result){
        router.replace(`/test/view/${id}/${slug}`)
      }      
    })    
  },[session])

  return <div>
    <TestView slug={slug}/>
  </div>
}