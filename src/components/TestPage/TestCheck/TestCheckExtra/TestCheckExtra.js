import { ExtraButton } from "@/components/ExtraButton/ExtraButton"
import { useRouter } from "next/navigation"
import styles from "./TestCheckExtra.module.scss"

export function TestCheckExtra(){

  const router = useRouter()

  const handle = () =>{
    router.back()
  }

  return <div className={styles.container}>
    <ExtraButton onClick={handle} title={"Вернуться"} type="green"/>
  </div>
}