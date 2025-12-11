import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import router from "./routes/userRoutes.js";
import { InitDB } from "./models/InitDB.js";




const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api", router);

InitDB()
app.listen(port, () => console.log(`Server running on port ${port}`));
