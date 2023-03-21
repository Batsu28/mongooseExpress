import moment from "moment";
import ProductModel from "../models/ProductModel.js";

export async function getProducts() {
  const arr = await ProductModel.find().limit();
  return arr;
}
export async function addProduct(product) {
  const arr = await ProductModel.create({
    ...product,
    createdDate: moment().format("llll"),
    updatedDate: moment().format("llll"),
  });
  return arr;
}
