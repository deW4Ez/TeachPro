import styles from "./ExtraButton.module.scss"

export function ExtraButton({title, type="default", onClick, isActive}) {

  let buttonStyle;

  if (type === "default") buttonStyle = styles.container
  if (type === "green") buttonStyle = styles.container_green
  if (type === "red") buttonStyle = styles.container_red
  if (isActive) buttonStyle = styles.container_active

  return <div onClick={onClick} className={buttonStyle}>
    {title}
  </div>
}