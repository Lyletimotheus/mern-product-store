import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

const app = express();
app.use(express.json()); // allows to accept JSON in the body

dotenv.config();

const port = process.env.PORT || 5000;
app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
  connectDB();
});
