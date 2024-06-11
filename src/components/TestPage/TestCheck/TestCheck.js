"use client"

import styles from "./TestCheck.module.scss"
import { useState, useEffect, createContext } from "react"
import { TestCheckSidebar } from "./TestCheckSidebar/TestCheckSidebar"
import { TestMainCheck } from "./TestMainCheck/TestMainCheck"
import { TestCheckExtra } from "./TestCheckExtra/TestCheckExtra"

export const TestCheckContext = createContext()

export function TestCheck({test, dataAnswers}){ 

  return <TestCheckContext.Provider value={{test, dataAnswers}}>
    <div className={styles.container}>
      <div className={styles.testSidebar}>
        <TestCheckSidebar/>
      </div>
      <div className={styles.mainContainer}>
        <TestMainCheck/>
      </div>
      <div className={styles.testExtra}>
        <TestCheckExtra/>
      </div>
    </div>
  </TestCheckContext.Provider>
}