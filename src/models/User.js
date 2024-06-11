import mongoose from "mongoose";

const UserScheme = new mongoose.Schema({
  firstname: String,
  surname: String,
  login: String,
  password: String,  
  role: String,
  relations: [{ 
    id: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    login: String, 
    subject: String
  }]
}, {timestamps: true})

const UserModel = mongoose?.models?.User || mongoose.model("User", UserScheme)

export default UserModel