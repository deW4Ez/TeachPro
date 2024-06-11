import { HeaderProfile } from "../Header/HeaderProfile/HeaderProfile";
import { CirclePlus } from 'lucide-react';
import { Pencil } from 'lucide-react';
import styles from "./StudentLine.module.scss"
import { useContext } from "react";
import { taskBlockContext } from "@/app/dashboard/group/page";
import { getStudentsById } from "@/services/students.service";
import { DashboardContext } from "@/app/dashboard/layout";

export function StudentLine({name, id}){

  const { currentStudent, setCurrentStudent, isExtra, setIsExtra} = useContext(taskBlockContext)
  const {isTutor} = useContext(DashboardContext)

  const handler = async () => {
    if(!isExtra){
      setIsExtra(true)
    }
    await getStudentsById(id).then(res => setCurrentStudent(res))
    console.log(currentStudent)
  }

  return <div onClick={handler} className={styles.container}>
    <div className="flex flex-row items-center gap-4">
      <HeaderProfile/>
      <div>
        {name}
      </div>
    </div>    
    <div className="flex flex-row gap-4">
      {isTutor?<div>
        {<CirclePlus/>}
      </div>:<></>}
      <div>
        {<Pencil/>}
      </div>
    </div>
    
  </div>
}