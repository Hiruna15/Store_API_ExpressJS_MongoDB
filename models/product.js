import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  qnt: { type: Number, default: 1 },
  price: { type: Number, required: true },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
