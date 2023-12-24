const mongoose = require("mongoose");
require('dotenv').config();


const Mongo_url = process.env.MONGO_DB_URL;

function dataBaseConnection() {
    
    mongoose
      .connect(Mongo_url)
      .then(() => console.log("Connected Successfuly"))
      .catch((err) => console.log("Failed to connect", err));
}
module.exports = dataBaseConnection()