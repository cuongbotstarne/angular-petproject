require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { handleError } = require("../server/config/error");

//DB
const connectDB = require("./config/db");
connectDB();

//SET UP
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//API
app.get("/", (req, res) => res.send("API running!!"));
app.use("/api/users", require("./routes/api/user.api"));

// HANDLE ERROR
app.use((err, req, res, next) => {
  handleError(err, res);
});
const port = 8080 | process.env.PORT;
app.listen(port, () => console.log(`Server started on ${port}`));
