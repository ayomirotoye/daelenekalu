const mongoose = require("mongoose");

const DB = process.env.DATABASE_MONGODB_URL;

// Connect to the database
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Successfully connected to Database, Darlene.`);
  })
  .catch((err) => {
    console.log(`Error connecting to Database, Darlene. ${err}`);
  });
