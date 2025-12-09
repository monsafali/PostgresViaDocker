import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import router from "./routes/userRoutes.js";
import createUserTable from './models/user.model.js';

const app = express();
const port = process.env.PORT 

app.use(cors());
app.use(express.json());
app.use("/api", router)



createUserTable()
app.listen(port, () => console.log(`Server running on port ${port}`));
