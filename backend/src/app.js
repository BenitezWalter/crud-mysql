import express from "express";
import morgan from "morgan";
import cors from "cors";
import { router } from "./routes/products.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(morgan("dev"));

app.listen(3000, () => {
  console.log("Server on port 3000");
});
