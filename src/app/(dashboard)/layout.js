"use client"

import { Sidebar } from "@/components/Sidebar/Sidebar";
import styles from "./PageLayout.module.scss"
import { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export const PageContext = createContext()

export default function PageLayout({children}){

  const [currentTab, setCurrentTab] = useState("group")
  const [role, setRole] = useState()
  const [login, setLogin] = useState()
  const [username, setUsername] = useState()  
  const session = useSession()
  useEffect(() =>{
    setRole(session.data?.user.name.role)
    setLogin(session.data?.user.name.login)
    setUsername(session.data?.user.name.surname + " " + session.data?.user.name.firstname)
  },[session])

  return <PageContext.Provider value={{currentTab, setCurrentTab, role, login, username}}>
    <div className={styles.container}>
      <div>
        <Sidebar/>
      </div>    
      {children}
    </div>
  </PageContext.Provider>  
}