import { ExtraButton } from "@/components/ExtraButton/ExtraButton";
import styles from "./TutorTaskExtra.module.scss"
import { UseTaskBlock } from "@/components/UseTaskBlock/UseTaskBlock";
import { useContext, useEffect, useState } from "react";
import { TutorTaskContext } from "@/app/(dashboard)/task/page";
import { PageContext } from "@/app/(dashboard)/layout";
import { useRouter } from "next/navigation";


export function TutorTaskExtra(){

  const [buttonAddState, setButtonAddState] = useState(false)
  const [buttonEditState, setButtonEditState] = useState(false)
  const {currentTask} = useContext(TutorTaskContext)
  const router = useRouter() 

  const {role} = useContext(PageContext)

  useEffect(()=>{
    setButtonEditState(false)
  }, [currentTask])

  return (role === "tutor" ? <div className={styles.container}>
    <ExtraButton
      isActive={buttonAddState}
      onClick={() => router.push("/test/create")}
      title={"Добавить задание"}
    />
    {buttonAddState? <UseTaskBlock/>: <></>}    
    {currentTask ? <div className="flex flex-col gap-4 mt-4"> 
      {/* <ExtraButton title={"Скопировать ссылку"}/> */}
      <ExtraButton 
      title={"Изменить задание"}
      isActive={buttonEditState}
      onClick={()=> setButtonEditState(state => !state)}/>
      {buttonEditState ? <UseTaskBlock task={currentTask}/> : <></>}
    </div> : <></>}
    <ExtraButton title={"Удалить"} type={"red"}/>
  </div> : <div>
    {currentTask && <ExtraButton
      onClick = {() => router.push(`/test/${currentTask._id}`)}
      title={"Перейти к заданию"}
    />}
  </div>)
}