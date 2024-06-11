import { useForm } from "react-hook-form"
import styles from "./UseTaskBlock.module.scss"

export function UseTaskBlock({task={}}){

  const {register, handleSubmit} = useForm({
    defaultValues: task
  })

  const onSubmit = async (data) => {
    console.log(data)
  }

  return <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>      
        <div className={styles.subContainer}>
          <h1>Тема</h1>
          <input {...register("title")} />
        </div>
        <div className={styles.subContainer}>
          <h1>Предмет</h1>
          <input {...register("subject")}/>
        </div>
        <div className={styles.subContainer}>
          <h1>Срок выполнения</h1>
          <input type="date" {...register("deadline")}/>
        </div>
        <input type="submit" value={task ? "Изменить" : "Добавить"}/>      
      </div>
    </form>
}