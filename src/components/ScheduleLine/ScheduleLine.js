import { HeaderProfile } from "../Header/HeaderProfile/HeaderProfile"
import { Wallet } from "lucide-react";
import styles from "./ScheduleLine.module.scss"
import { useEffect, useState } from "react";
import { getNameUser } from "@/services/user.service";


export function ScheduleLine({ startTime, endTime, id_user, title, onClick, paidStatus, price, isCurrent=false}){

  const [name, setName] = useState()

  useEffect(()=>{
    if(id_user){
      getNameUser(id_user).then(result => setName(result))
    }    
  },[id_user])

  return <div onClick={onClick} className={isCurrent ? styles.container_active : styles.container}>
    <div className="flex flex-row gap-6">
    <div className="pr-6 border-r">
      <div>{startTime}</div>
      <hr></hr>
      <div>{endTime}</div>
    </div>
    <div className="flex flex-row gap-5">
      <HeaderProfile/>
      <div className="flex flex-col">
        <div>{name}</div>
        <div className="font-bold">{title}</div>
      </div>
    </div>
  </div>
  <div className="flex flex-row gap-4">
    <div>{price} руб</div>   
    <Wallet color={paidStatus === "paid" ? "green":
    paidStatus === "non-paid" ? "red": "black"}/>
  </div>
  </div>
  
}