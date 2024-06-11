import Image from "next/image"
import styles from "./BorderButton.module.scss"

export function BorderButton({title, img, onCLick}) {
  return <div onClick={onCLick} className={styles.container}>
    <div className={styles.title}>{title}</div>    
    <div className={styles.img}>{img}</div>
  </div>
}