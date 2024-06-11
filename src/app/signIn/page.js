"use client"
import { useState } from "react";
import styles from "./signIn.module.scss"
import { SignInPage } from "@/components/SignInPage/SignInPage";
import { RegisterPage } from "@/components/RegisterPage/RegisterPage";

export default function SignIn() {

  const [isLogIn, setLogIn] = useState(true)

  return <div className={styles.outside}>
    <div className={styles.container}>
      {isLogIn ? <SignInPage/> : <RegisterPage/>}
      <div className={styles.changeLogIn} onClick={()=>setLogIn((elem)=> !elem)}>
        {isLogIn ? "Регистрация" : "Есть аккаунт?"}
      </div>
    </div>    
  </div>
}