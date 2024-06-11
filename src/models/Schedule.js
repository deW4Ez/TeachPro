import mongoose from "mongoose";

const ScheduleScheme = new mongoose.Schema({
  title: String,
  date: String,
  startTime: String,
  endTime: String,  
  paidStatus: String, // "paid", "non-paid", "coming"
  price: Number,
  id_student: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  id_tutor: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, {timestamps: true})

const ScheduleModel = mongoose?.models?.Schedule || mongoose.model("Schedule", ScheduleScheme)

export default ScheduleModel