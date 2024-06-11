"use client"

import { ExtraButton } from "@/components/ExtraButton/ExtraButton";
import styles from "./TestExtraBlock.module.scss"
import { useContext } from "react";
import { TestContext } from "../TestView";

export function TestExtraBlock(){

  const {handleSend} = useContext(TestContext) 

  return <div className={styles.container}>
    <ExtraButton onClick={handleSend} title={"Отправить"} type="green"/>
  </div>
}