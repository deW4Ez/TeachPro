import Image from "next/image"
import styles from "./SidebarButton.module.scss"
import TaskIcon from "/public/Tabs/Task.svg"
import CalendarIcon from "/public/Tabs/Calendar.svg"
import GroupIcon from "/public/Tabs/Group.svg"
import { usePathname } from "next/navigation"
import { PageContext } from "@/app/(dashboard)/layout"
import { useContext } from "react"

export function SidebarButton({type}){

  const pathname = usePathname().split("/")[1]
  const {role} = useContext(PageContext)

  return <div className={type === pathname ? styles.container_current : styles.container}>
      <Image
        src={type === "task"? TaskIcon : type === "schedule"? CalendarIcon : GroupIcon}
        width={50}
        height={50}
        alt={type}
      />
      <div className={styles.title}>
        {type === "task"? "Задания":""}
        {type === "schedule"? "Расписание":""}
        {type === "group"? (role === "tutor" ? "Ученики": "Тьюторы"):""}
      </div>
  </div>
}