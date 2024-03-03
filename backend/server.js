const app = require("./app");

const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Config
dotenv.config();

// Connect to Database
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`server is listening on ${process.env.PORT}`);
});
