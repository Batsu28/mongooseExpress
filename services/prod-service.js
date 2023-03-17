import moment from "moment";
import ProductModel from "../models/ProductModel.js";

export async function getProducts(category) {
  const arr = await ProductModel.find(category ? category : {}).limit();
  return arr;
}
