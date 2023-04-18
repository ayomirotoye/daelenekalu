const express = require("express");

const itemRouter = require("./routes/itemRoutes");

require("dotenv").config();
require("./database");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/items", itemRouter);

// starts the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
