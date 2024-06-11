import mongoose from "mongoose";

const AnswersScheme = new mongoose.Schema({
  id_student: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  id_task: {type: mongoose.Schema.Types.ObjectId, ref: "Task"},
  answers: [String]   
},{timestamps: true})

const AnswersModel = mongoose?.models?.Answers || mongoose.model("Answers", AnswersScheme)

export default AnswersModel