const mongoose = require('mongoose')

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected")
  }
  catch (err) {
    console.log("DB not connected".err)
    process.exit(1);
  }
}
module.exports = dbConnect