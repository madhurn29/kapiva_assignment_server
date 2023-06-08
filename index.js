const express = require("express");
const { connection } = require("./Config/db");
const { dishRouter } = require("./Routes/dish.route");
const app = express();
var cors = require("cors");
app.use(express.json());
app.use(cors());
app.use("/", dishRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connect set with mongoDb");
  } catch (error) {
    console.log(error, "connecting db");
  }

  console.log("listening on port 8080");
});
