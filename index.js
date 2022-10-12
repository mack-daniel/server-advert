require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./conn/db");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

// database connection
connection();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3001");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// routes
app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/api/users", (req, res) => {
  res.send("Register User");
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port http://localhost:${port}`));

// db-advert
//u: dbUser
//p: dbUserPassword
