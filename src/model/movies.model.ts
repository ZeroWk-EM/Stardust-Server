import { model, Schema } from "mongoose";
import IMovie from "../interface/movies.interface";

const MovieSchema = new Schema<IMovie>(
  {
    image: { type: String, required: false },
    title: { type: String, require: true },
    episode_id: { type: Number, required: true },
    opening_crawl: { type: String, required: true },
    director: { type: String, required: true },
    producer: { type: String, required: true },
    release_date: { type: Date, required: true },
    characters: [{ type: String, required: false }],
    droid: [{ type: String, required: false }],
    vehicles: [{ type: String, required: false }],
  },
  { timestamps: true, versionKey: false }
);

export default model<IMovie>("movies", MovieSchema);
