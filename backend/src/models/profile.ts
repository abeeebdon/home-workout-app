import mongoose from "mongoose";
import { ProfileType } from "../shared/types";

const profileSchema = new mongoose.Schema<ProfileType>({
  email: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: String, required: true },
  height: { type: Number, required: true },
});

const Profile = mongoose.model<ProfileType>("Profile", profileSchema);
export default Profile;