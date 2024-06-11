import mongoose from "mongoose";

const TaskScheme = new mongoose.Schema({
  title: String,
  subject: String,  
  deadline: String,
  time: Number,  
  questions: [{
    typeQuest: String, 
    title: String,
    answers: [{
      answer: String,
      validation: Boolean
    }]
  }]
}, {timestamps: true})

const TaskModel = mongoose?.models?.Task || mongoose.model("Task", TaskScheme)

export default TaskModel