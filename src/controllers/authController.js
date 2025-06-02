const bcryt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require('../models/userModel')

//-----------------------register-----------------------------

const register = async (req, res) => {
  const { username, password, role } = req.body;
  const hashPassword = await bcryt.hash(password, 10)
  try {
    const newUser = new User({ username, password: hashPassword, role });
    console.log(newUser)
    await newUser.save();
    res.status(201).json({ message: ` Registerd Username ${username}` })
  }
  catch (err) {
    console.log("error", err)
    res
      .status(400)
      .json({ message: "Something went wrong01" })
  }
}

//-----------------------login-----------------------------

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(404)
        .json({ message: ` ${username} not found` })
    }
    const isMatch = await bcryt.compare(password, user.password)
    if (!isMatch) {
      return res
        .status(400).json({ message: `invalid credential ${username}` })
    }
    //-----------------------token-----------------------------

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    )
    res.status(200).json({ token });

  }
  catch (err) {
    res.status(400).json({ message: "something went wrong123", error: err.message })
  }
};



module.exports = {
  register,
  login
}