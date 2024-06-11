"use client"
import { postInvite } from "@/services/user.service"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import styles from "./invite.module.scss"
import { ExtraButton } from "@/components/ExtraButton/ExtraButton"
import { useRouter } from "next/navigation"

export default function InvitePage({params:{id}}){

  const session = useSession()
  const router = useRouter()  
  const [request, setRequest] = useState()

  useEffect(() => {
    if(session.status === "authenticated" && !request){
      postInvite({
        id_tutor: id,
        id_student: session.data.user.name.id
      }).then(req => {
        console.log(req)
        setRequest(req)
      })      
    }
  }, [session])

  return <div className={styles.container}>
    {request? <div className={styles.block}>
      {request.status === "access" && <div className={styles.dataBlock}>
          <div>
            Вы были вступили в группу к:
          </div>
          <div className={styles.name}>
            {request.tutor.surname + " " + request.tutor.firstname}
          </div>
        </div>}
      {request.status ==="linked" && <div className={styles.dataBlock}>
          <div>
            Вы уже состоите в одной группе с
          </div>
          <div className={styles.name}>
            {request.tutor.surname + " " + request.tutor.firstname}
          </div>
        </div>}
      {request.status === "not-access" && <div className={styles.dataBlock}>
          Невозможно добавить в одну группу
        </div>}
      <ExtraButton onClick={() => router.back()} title={"Вернуться"} type={"green"} />
    </div>: <div>Loading...</div>}       
  </div>
}