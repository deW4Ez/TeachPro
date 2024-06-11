"use client"
import { useForm } from "react-hook-form";
import styles from "./SignInPage.module.scss"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function SignInPage(){

  
  const {register, handleSubmit} = useForm()
  const router = useRouter()

  const onSubmit = async (data) =>{   
    
    const options = {
      ...data,
      redirect: false
    }

    const res = await signIn("credentials", options)

    if (res && res.status === 200){
      router.push("/")
      
    } else {
      console.log(res)
    }
  }

  return <div className={styles.container}>
    <h1>Вход</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.component}>
        <h2>Логин</h2>
        <input className={styles.input} type="text" {...register("login")}/>
      </div>
      <div className={styles.component}>
        <h2>Пароль</h2>
        <input className={styles.input} type="password" {...register("password")}/>
      </div>        
      <input className={styles.submit} type="submit" value="Войти"/>
    </form>
  </div>
}