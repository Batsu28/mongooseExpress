import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    stock: Number,
    price: Number,
    sale: Number,
    description: String,
    spec: Array,
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    brand: { type: Schema.Types.ObjectId, ref: "Brands" },
    image: String,
    id: String,
    createdDate: String,
    updatedDate: String,
  },
  { collection: "products" }
);

const ProductModel = mongoose.model("ProductModel", productSchema, "products");

export default ProductModel;
