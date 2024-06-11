"use client"

import { ExtraButton } from "@/components/ExtraButton/ExtraButton";
import { TutorPageContext } from "@/app/(dashboard)/group/page";
import { useContext, useEffect, useState } from "react";
import { ExtraProfileBlock } from "@/components/ExtraProfileBlock/ExtraProfileBlock";
import styles from "./TutorGroupExtra.module.scss"
import { PageContext } from "@/app/(dashboard)/layout";
import { useRouter } from "next/navigation";
import { UseGroupBlock } from "@/components/UseGroupBlock/UseGroupBlock";


export function TutorGroupExtra(){

  const {currentGroup} = useContext(TutorPageContext)
  const {role} = useContext(PageContext)
  const router = useRouter()
  const [isAdd, setIsAdd] = useState(false)
  

  return role && ( role === "tutor" ?
    <div> 
      {currentGroup ? 
        <div className={styles.container}>
          <ExtraProfileBlock person={currentGroup} />
          <ExtraButton 
            title={"Информация"} 
            onClick={()=> router.push(`/info/${currentGroup._id}`)} 
            />
          {/* <ExtraButton title={"Добавить задание"} /> */}
          <ExtraButton title={"Удалить"} type={"red"}/>
        </div>:
        <div className="flex flex-col gap-4">
           <ExtraButton onClick={()=> setIsAdd((elem) => !elem)} title={"Добавить ученика"} />
           {isAdd && <UseGroupBlock/>}
        </div>       
      }
    </div>:
    <div>
      <ExtraButton title={"Добавить тьютора"} />      
    </div>  
  )
}