import "dotenv/config";
import express from "express";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFound from "./middleware/not-found.js";
import connectDB from "./db/connect.js";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Store API</h1><a href='/api/vi/products'>products route</a>");
});

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to the DB");
    app.listen(port, () => {
      console.log(`Server is litenening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
