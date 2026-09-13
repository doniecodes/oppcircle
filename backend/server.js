const express = require("express");
require("dotenv").config();
const cors = require("cors");
const pool = require("./data/pg");
const opportunitiesRoutes = require("./routes/opportunitiesRoutes");

const app = express();

//middleware
app.use(express.json());
app.use(cors({
  target: "http://localhost:3000",
  methods: ["GET", "POST", "PATCH", "DELETE"]
}));

const PORT = process.env.PORT
pool.connect()
.then((client) => {
  console.log("Database connected successfully");
  client.release();
  app.listen(4000, () => {
    console.log("listening on port" + " " + PORT);
  });
}).catch((error) => {
  console.error("Database connection failed:", error);
});

//opportunities routes
app.use("/api/opportunities", opportunitiesRoutes);
