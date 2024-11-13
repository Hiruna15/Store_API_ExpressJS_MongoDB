import mongoose, { mongo, Schema } from "mongoose";
const { schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  qnt: { type: Number, default: 1 },
  price: { type: Number, required: true },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
