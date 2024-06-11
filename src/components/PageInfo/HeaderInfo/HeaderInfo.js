import { HeaderProfile } from "@/components/Header/HeaderProfile/HeaderProfile"
import { InfoContext } from "@/app/info/[id]/page"
import { useContext } from "react"
import styles from "./HeaderInfo.module.scss"

export function HeaderInfo(){
  
  const {person, debt} = useContext(InfoContext)

  return <div className={styles.container}>
    <div className={styles.profileBlock}>
      <HeaderProfile size={70}/>
      <div>
        <div>{person.surname + " " + person.firstname}</div>
      </div>
    </div>
    <div className={styles.debt}>
      <div>Итого:</div>
      <div className="flex flex-row gap-2 items-end">
        <div className="text-4xl">
          {debt}
        </div>        
        руб.
      </div>      
    </div>
  </div>
}