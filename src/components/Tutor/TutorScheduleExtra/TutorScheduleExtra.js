import { PageContext } from "@/app/(dashboard)/layout"
import { ExtraButton } from "@/components/ExtraButton/ExtraButton"
import { UseScheduleBlock } from "@/components/UseScheduleBlock/UseScheduleBlock"
import { useContext, useEffect, useState } from "react"
import { TutorScheduleContext } from "@/app/(dashboard)/schedule/page"

export function TutorScheduleExtra(){

  const {role} = useContext(PageContext)
  const [stateAddBlock, setStateAddBlock] = useState(false)
  const [stateChangeBlock, setStateChangeBlock] = useState(false)
  const {currentSchedule, updateData} = useContext(TutorScheduleContext)

  useEffect(()=>{
    setStateChangeBlock(false)
  },[currentSchedule])

  return <div>
    {role && (role === "tutor"? <div className="flex flex-col gap-4">
      <ExtraButton 
        title={"Добавить занятие"}
        onClick={() => {
          setStateAddBlock(state => !state)
          setStateChangeBlock(false)
        }}
      />
      {stateAddBlock && <UseScheduleBlock/>}
      {currentSchedule && <ExtraButton 
        title={"Изменить"}
        onClick={() => {
          setStateChangeBlock(state => !state)
          setStateAddBlock(false)
        }}
      />}
      {stateChangeBlock && <UseScheduleBlock schedule={currentSchedule} updateData={updateData} />}
    </div>:
    <div>
      
    </div>)}
  </div>
}