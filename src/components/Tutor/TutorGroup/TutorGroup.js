"use client"

import { useContext, useState } from "react"
import styles from "./TutorGroup.module.scss"
import { PersonLine } from "@/components/PersonLine/PersonLine"
import { TutorPageContext } from "@/app/(dashboard)/group/page"
import { PageContext } from "@/app/(dashboard)/layout"

export function TutorGroup(){

  const {group, currentGroup, setCurrentGroup} = useContext(TutorPageContext)
  const {role} = useContext(PageContext)


  return <div className={styles.container}>
    <h1>
      {role === "tutor" ? "Мои ученики" : "Мои тьюторы"}
    </h1>
    <div className={styles.studentsBlock}>
      {group?.map((elem, ind) => <PersonLine key={ind}
      person = {elem}
      current = {currentGroup}
      setCurrent = {setCurrentGroup}
      />)}
    </div>
    
  </div>
}