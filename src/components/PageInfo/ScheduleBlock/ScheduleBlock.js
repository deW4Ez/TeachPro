import { useContext, useEffect, useState } from "react"
import styles from "./ScheduleBlock.module.scss"
import { InfoContext } from "@/app/info/[id]/page"
import { getFilterSchedule } from "@/services/schedule.service"
import { ScheduleLine } from "@/components/ScheduleLine/ScheduleLine"
import { getScheduleDate } from "@/lib/dateParse"

export function ScheduleBlock(){

  const [schedule, setSchedule] = useState({})
  const {person, setDebt, debt} = useContext(InfoContext)
  const [dates, setDates] = useState([])

  
  useEffect(()=>{
    getFilterSchedule({
      id: person._id,
      role: person.role
    }).then(result => setSchedule(result))
  },[] )

  useEffect( () =>{
    setDates(Object.keys(schedule))
    if(dates){
      dates.map(date => {
        schedule[date].map(elem =>{
          if(elem.paidStatus === "paid"){
            setDebt(state => state+elem.price)
          }
        })
      })
    }
  },[schedule] )

  return <div className={styles.container}>
    <h1>Расписание</h1>
    <div className={styles.schedule}>
    {dates.map((elem, ind) => {
      const date = getScheduleDate(elem)
      return <div key={ind} className={styles.scheduleBlock}>
          <div className={styles.date}>
            <div>{date}</div>
            <div>Оплата</div>
          </div>
          <hr></hr>
          <div className="flex flex-col gap-2">
            {schedule[elem].map( (elem, ind) => {              
              return <div key={ind}>
                <ScheduleLine
                  startTime={elem.startTime}
                  endTime={elem.endTime}
                  id_user={elem.id_student}
                  title={elem.title}
                  paidStatus={elem.paidStatus}
                  price = {elem.price}                                
                />
              </div>
            })}
          </div>
        </div>
    })}
    </div>
  </div>
}