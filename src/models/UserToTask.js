import mongoose from "mongoose";

const UserToTaskScheme = new mongoose.Schema({
  id_user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  id_task: {type: mongoose.Schema.Types.ObjectId, ref: "Task"}  
})

const UserToTaskModel = mongoose?.models?.UserToTask || mongoose.model("UserToTask", UserToTaskScheme)

export default UserToTaskModel