
//import for all package what i insta
const express = require("express");
const dotenv = require("dotenv")
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db/db.js");
const someModel = require("./../../db/models/userSchema");

//instantiate express
const app = express()

//environment variables
dotenv.config()

// app  level middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
//app.use(dotenv("dotenv"));







const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });