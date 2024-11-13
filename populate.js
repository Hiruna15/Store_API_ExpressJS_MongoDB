import "dotenv/config";
import connectDB from "./db/connect.js";
import productModel from "./models/product.js";
import jsonProducts from "./products.json" assert { type: "json" };

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await productModel.deleteMany();
    await productModel.insertMany(jsonProducts);
    console.log("successfully added!!!!");
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
