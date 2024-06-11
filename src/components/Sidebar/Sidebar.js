"use client"

import { usePathname } from "next/navigation"
import { ProfileBlock } from "../ProfileBlock/ProfileBlock"
import { SidebarButton } from "../SidebarButton/SidebarButton"
import styles from "./Sidebar.module.scss"
import Link from 'next/link'


export function Sidebar(){

  return <div className={styles.container}>
    <ProfileBlock/>
    <hr className="mx-10"/>
    <div className="flex flex-col gap-2">
      <Link href="/group">
        <SidebarButton type="group"/>
      </Link>
      <Link href="/task">
        <SidebarButton type="task"/>
      </Link>
      <Link href="/schedule">
        <SidebarButton type="schedule"/>
      </Link>
    </div>
  </div>
}