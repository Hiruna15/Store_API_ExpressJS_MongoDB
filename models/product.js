import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: [true, "product name must be provided"] },
  qnt: { type: Number, default: 1 },
  price: { type: Number, required: [true, "product price must be provided"] },
  featured: { type: Boolean, default: false },
  rating: { type: Number, default: 4.5 },
  createdAt: { type: Date, default: Date.now() },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
  },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
