import { useContext, useEffect, useState } from "react"
import styles from "./TutorSchedule.module.scss"
import { getFilterSchedule } from "@/services/schedule.service"
import { useSession } from "next-auth/react"
import { getScheduleDate } from "@/lib/dateParse"
import { ScheduleLine } from "@/components/ScheduleLine/ScheduleLine"
import { TutorScheduleContext } from "@/app/(dashboard)/schedule/page"


export function TutorSchedule(){

   
  const {currentSchedule, setCurrentSchedule, role, schedule, session, updateData} = useContext(TutorScheduleContext)
  
  const [dates, setDates] = useState([])
  
  
  useEffect( ()=>{
    updateData()   
  },[session] )

  useEffect( () =>{
    if(schedule){
      setDates(Object.keys(schedule))
    }    
  },[schedule] )

  return <div className={styles.container}>
    <h1>Расписание</h1>
    <div className="flex flex-col gap-4">
    {dates.map((elem, ind) => {
      const date = getScheduleDate(elem)
      return <div key={ind} className={styles.scheduleBlock}>
          <div className={styles.date}>
            {date}
          </div>
          <hr></hr>
          <div className="flex flex-col gap-2">
            {schedule && schedule[elem].map( (elem, ind) =>
              <div key={ind}>
                <ScheduleLine
                  isCurrent={elem._id === currentSchedule?._id}
                  startTime={elem.startTime}
                  endTime={elem.endTime}
                  id_user={role==="tutor"? elem.id_student:elem.id_tutor}
                  title={elem.title}
                  paidStatus={elem.paidStatus}
                  price = {elem.price}
                  onClick={()=>{setCurrentSchedule(elem)}}              
                />
              </div>
            )}
          </div>
        </div>
    })}
    </div>
  </div>
}