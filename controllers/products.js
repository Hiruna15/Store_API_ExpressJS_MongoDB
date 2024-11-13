import productModel from "../models/product.js";
import "express-async-errors";

const getProducts = async (req, res) => {
  const products = await productModel.find();

  throw Error("no products found!");

  res.status(200).json(products);
};

export { getProducts };
