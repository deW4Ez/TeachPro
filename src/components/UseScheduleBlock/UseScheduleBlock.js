import { useForm } from "react-hook-form"
import styles from "./UseScheduleBlock.module.scss"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { getNameUser, getRelations } from "@/services/user.service"
import { addSchedule, putSchedule } from "@/services/schedule.service"

export function UseScheduleBlock({schedule, updateData}){  

  const [relations, setRelations] = useState([])
  const [student, setStudent] = useState()
  const session = useSession()

  useEffect( ()=>{
    if(session.status === "authenticated"){
      getRelations(session.data.user.name.id).then( res => {       
        setRelations(res)
      })
      if(schedule){
        getNameUser(schedule.id_student).then(result => setStudent(result))
      }  
    }              
  }, [session] )
  
  const {register, handleSubmit} = useForm({
    defaultValues: schedule
  })

  const onSubmit = async (data) => {      
    if(schedule){
      await putSchedule({...data})
    } else {
      await addSchedule({...data, id_tutor: session.data.user.name.id, paidStatus: "coming"})
    }
    updateData()
  }

  return <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          {schedule?
            <input 
              defaultValue={student} 
              disabled 
            />
          :<select            
            defaultValue="" 
            className={styles.selectStudents}
            {...register("id_student")}
          >
            <option value="" disabled>Выберите ученика</option>
            {relations.map((relation, ind) => 
              <option
                key={ind}
                value={relation._id}                
              >
                {relation.surname + " " + relation.firstname}
              </option>)}
          </select>}
        </div>     
        <div className={styles.subContainer}>
          <h1>Тема урока</h1>
          <input {...register("title")} />
        </div>        
        <div className={styles.subContainer}>
          <h1>Дата занятия</h1>
          <input type="date" {...register("date")}/>
        </div>
        <div className={styles.subContainer}>
          <h1>Время занятия</h1>
          <div className="flex flex-row gap-10 justify-center">
            <div className="flex flex-row gap-2 w-max items-center">
              <div>от</div>
              <input type="time" {...register("startTime")}/>
            </div>
            <div className="flex flex-row gap-2 w-max items-center">
              <div>до</div>
              <input type="time" {...register("endTime")}/>
            </div>
          </div>          
        </div>
        <div className={styles.subContainer}>
          <h1>Цена занятия</h1>
          <div className="flex flex-row gap-2 w-36 items-center">
            <input type="number" {...register("price")} />
            <div>руб.</div>
          </div>
        </div>
        {schedule && <div className={styles.subContainer}>
          <div htmlFor="isPaid" className="flex flex-row items-center py-3 gap-5">
            <label className="text-nowrap w-max cursor-pointer" htmlFor="isPaid">Оплачена услуга</label>
            <select defaultValue={schedule.paidStatus} className={styles.selectStudents} {...register("paidStatus")}>
              <option value={"paid"}>Оплачено</option>
              <option value={"non-paid"}>Не оплачено</option>
              <option value={"coming"}>Нет</option>
            </select>
          </div>         
        </div>}
        <input type="submit" value={schedule ? "Изменить" : "Добавить"}/>      
      </div>
    </form>
}