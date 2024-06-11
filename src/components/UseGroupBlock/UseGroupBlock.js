"use client"

import styles from "./UseGroupBlock.module.scss"
import { Copy } from "lucide-react"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

export function UseGroupBlock() {

  const [link, setLink] = useState()
  const [isCopied, setIsCopied] = useState(false)
  const session = useSession()
   
  function handleClick(){
    navigator.clipboard.writeText(link)
    setIsCopied(true)
  }

  useEffect( ()=>{      
    setLink((window.location.origin + `/invite/${session.data.user.name.id}`))
  }, [] )

  return <div className={styles.container}>
    <div className={styles.title}>
      Ссылка
    </div>
    <div className={styles.link}>
      <div onClick={handleClick} className="text-ellipsis overflow-hidden">
        {link}
      </div>      
      <Copy/>
    </div>
    <div className={styles.activation}>
      {isCopied ? "Ссылка скопирована": <div className="min-w-5"> </div>}
    </div>
    <div className={styles.description}>
      Скопируйте ссылку и отправьте ученику для привязки.
    </div>
  </div>
}