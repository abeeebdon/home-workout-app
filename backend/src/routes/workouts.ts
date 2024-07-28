import express, { Request, Response } from "express";
import Workout from "../models/workout";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
	const workouts = await Workout.find();
    res.json(workouts);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching workoutList" });
  }
});

export default router;