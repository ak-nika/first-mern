import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 3000;
const db = process.env.MONGO_URI;

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}...`);
});
