import mongoose from "mongoose";
import { WorkoutListType } from "../shared/types";

const workoutListSchema = new mongoose.Schema<WorkoutListType>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  source: [{ type: String, required: true }],
  time: { type: String, required: true },
});

const WorkoutList = mongoose.model<WorkoutListType>("WorkoutList", workoutListSchema);
export default WorkoutList;