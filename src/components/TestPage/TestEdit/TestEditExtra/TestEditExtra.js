import { ExtraButton } from "@/components/ExtraButton/ExtraButton"
import styles from "./TestEditExtra.module.scss"
import { useContext, useEffect, useState } from "react"
import { TestEditContext } from "../TestEdit"
import { useSession } from "next-auth/react"
import { getRelations} from "@/services/user.service"
import { addTestToUser } from "@/services/task.service"
import { X } from "lucide-react"
import { addTask } from "@/services/task.service"
import { useRouter } from "next/navigation"

export function TestEditExtra(){

  const {testPattern, questions} = useContext(TestEditContext)
  const session = useSession()  
  const [relations, setRelations] = useState([])
  const [students, setStudents] = useState([])
  const router = useRouter()

  const handle = () =>{ 
    const relationsIds = relations.map(elem => elem._id)
    const dataQuest = []
    questions.map( elem => {
      const {isEdit, ...dataCurrQuest} = elem
      dataQuest.push(dataCurrQuest)
    })    
    addTask({...testPattern, questions: dataQuest, id_users: [session.data.user.name.id, ...relationsIds]})
    router.push("/task")    
  }

  const handleStudent = (id) =>{
    const dataStudents = [...students]
    relations.map( (relation) =>{
      if(relation._id === id)
        dataStudents.push({
          id: id,
          name: relation.surname + " " + relation.firstname
        })
    } )
    setStudents(dataStudents)
  }

  const handleDeleteStudent = (ind) => {
    const data = Object.assign([], students)
    data.splice(ind,1)
    setStudents(data)
  }
  
  useEffect( ()=>{
    if(session.status === "authenticated"){
      getRelations(session.data?.user.name.id).then( res => setRelations(res))
    }     
  }, [session] )


  return <div className={styles.container}>
    {relations && <select 
      onChange={(e) => handleStudent(e.target.value)} 
      defaultValue="" 
      className={styles.selectStudents}
    >
      <option value="" disabled>Выберите тестируемого</option>
      {relations.map((relation, ind) => 
        <option
          key={ind}
          value={relation._id}
          hidden={students.some(o => o.id === relation._id)}
        >
          {relation.surname + " " + relation.firstname}
        </option>)}
    </select>}
    <h1></h1>
    {students.map((elem, ind) => 
      <div onClick={handleDeleteStudent} className="flex flex-row p-2 cursor-pointer justify-between" key={ind}>
        {elem.name}
        <X color="red"/>
      </div>)}
    <ExtraButton onClick={handle} title={"Отправить"} type="green"/>
  </div>
}