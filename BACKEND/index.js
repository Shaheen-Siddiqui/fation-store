const express = require("express");
require("./dbConnection");
const cors = require("cors");
const app = express();
const user = require("./routes/user");

//
app.use(cors());

app.use(express.json());
app.use("/", user);

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => console.log("server is running on port 3000"));
