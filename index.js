const express = require('express')
const dotenv = require("dotenv").config();
const dbConnect = require('./src/config/dbConnect')
const app = express();

const authRoutes = require("./src/routes/authRoutes")
const userRoutes = require("./src/routes/userRoutes")

dbConnect();

// Middleware
app.use(express.urlencoded())
app.use(express.json())


// Routes
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)


// Server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server at http://localhost:${PORT}`))
