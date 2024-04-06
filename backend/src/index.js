const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

const mainRouter = require("./routes/index");

app.use(cors(), express.json());

app.use("/api/v1", mainRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
