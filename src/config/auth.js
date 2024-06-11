import Credentials from "next-auth/providers/credentials";
import db from "@/lib/db";
import UserModel from "@/models/User";


export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        login:{ label: "login", type: "text", required: true},
        password:{ label: "password", type: "password", required: true}
      },
      async authorize(credentials) {
        if (!credentials?.login || !credentials?.password) return null        
        await db.connect()
        const currentUser = await UserModel.findOne({login: credentials?.login})        
        await db.disconnect()
        if (currentUser && currentUser.password === credentials.password){     
          const user = {           
            name: {
              login: currentUser.login,
              firstname: currentUser.firstname,
              surname: currentUser.surname,
              role: currentUser.role,
              id: currentUser._id            
            }            
          };
          return user;          
        }
        return null
      }
    })
  ],
  pages: {
    signIn: "/signIn"
  }
}