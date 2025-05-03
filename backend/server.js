const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}...`);
});
