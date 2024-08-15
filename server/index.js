const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth.js");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/auth", authRoutes);

const PORT = 3001;
console.log("haha", process.env.MONGO_URL);
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "Dream_Nest",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port : ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
