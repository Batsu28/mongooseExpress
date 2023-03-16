import Movies from "../models/movieModel.js";

export function getMovie() {
  const result = Movies.find().limit(1);
  return result;
}
