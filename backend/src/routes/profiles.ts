import express, { Request, Response } from "express";
import Profile from "../models/profile";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
	const profiles = await Profile.find();
    res.json(profiles);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching profiles" });
  }
});

export default router;