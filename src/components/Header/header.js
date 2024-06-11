"use client"

import { useSession, signOut } from "next-auth/react"
import { HeaderProfile } from "./HeaderProfile/HeaderProfile"
import Link from "next/link"

export function Header(){

  const session = useSession()  

  return <div className="flex flex-row justify-around items-center min-h-16 w-full" >    
      <Link href="/">
        <div className="font-bold text-4xl">
          TeachPro
        </div> 
      </Link>   
    <div>
      {session?.data ? (
        <div className="flex flex-row gap-4 items-center">
          <HeaderProfile />
          <Link href="#" onClick={() => signOut({callbackUrl: "/"})}>
            Sign Out
          </Link>
        </div>        
      ) : (
        <Link href="/api/auth/signin">Sign In</Link>
      )}
    </div>    
  </div>
}