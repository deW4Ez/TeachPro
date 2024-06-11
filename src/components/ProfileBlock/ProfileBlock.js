import { HeaderProfile } from "../Header/HeaderProfile/HeaderProfile";
import styles from "./ProfileBlock.module.scss"
import { useSession } from "next-auth/react";

export function ProfileBlock(){ 

  const {data} = useSession()
  
  return <div className={styles.block}>
    <HeaderProfile />
    <div>
      <div className="flex flex-row gap-1">
        <div>
          {data?.user.name.surname}
        </div>
        <div>
          {data?.user.name.firstname}
        </div>        
      </div>
      <div>
        {data?.user.name.role === "tutor"? "Репетитор" : "Ученик"}
      </div>
    </div>
  </div>
}