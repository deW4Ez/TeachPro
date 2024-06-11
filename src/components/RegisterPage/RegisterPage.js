"use client"
import { useForm } from "react-hook-form";
import styles from "./RegisterPage.module.scss"
import { useRouter } from "next/navigation";
import { createUser } from "@/services/user.service";
import { signIn } from "next-auth/react";


export function RegisterPage(){

  const {register, handleSubmit} = useForm()
  const router = useRouter()

  const onSubmit = async (data) =>{    
    const options = {
      ...data,      
      relations:[],      
      redirect: false
    }
    await createUser({...data, relations:[]})
    const res = await signIn("credentials", options)
    console.log(res)
    if (res && res.status === 200){
      router.push("/group")
    } else {
      console.log(res)
    }
  }

  return <div className={styles.container}>
    <h1>Регистрация</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.component}>
        <h2>Логин</h2>
        <input className={styles.input} type="text" {...register("login")}/>
      </div>
      <div className={styles.component}>
        <h2>Пароль</h2>
        <input className={styles.input} type="password" {...register("password")}/>
      </div>
      <div className={styles.component}>
        <h2>Имя</h2>
        <input className={styles.input} type="text" {...register("firstname")}/>
      </div>
      <div className={styles.component}>
        <h2>Фамилия</h2>
        <input className={styles.input} type="text" {...register("surname")}/>
      </div>
      <div className={styles.component}>
        <h2>Роль</h2>
        <select defaultValue="none" className={styles.input} {...register("role")}>
          <option value="none" disabled hidden>Выберите роль</option>
          <option value="student">Ученик</option>
          <option value="tutor">Репетитор</option>
        </select>
      </div>        
      <input className={styles.submit} type="submit" value="Зарегистрироваться"/>
    </form>
  </div>
}