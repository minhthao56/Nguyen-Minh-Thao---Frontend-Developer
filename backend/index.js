const express = require("express");
const axios = require("axios");
const app = express();
const db = require("./database/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const { verifyJWT } = require("./middleware/auth");
const { PORT, SECRET } = require("./constants/app");

app.use(bodyParser.json());
app.use(express.json());

// app.use(verifyJWT);

app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    const oldUser = db.getOneByEmail({ email });

    if (oldUser instanceof Error) {
      return res.status(500).json({ error: "getOneByEmail-Error in BD" });
    }

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = db.createUser({
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    if (user instanceof Error) {
      return res.status(500).json({ error: "createUser-Error in BD" });
    }
    const token = jwt.sign({ user_id: user._id, email }, SECRET);
    user.token = token;
    res.status(201).json(user);
  } catch (err) {
    return res.status(500).json({ error: JSON.stringify(err) });
  }
});
// Login
app.post("/login", (req, res) => {
  // our login logic goes here
});

app.get("whoiam", (req, res) => {
  // our login logic goes here
});

app.get("/rockets", async (req, res) => {
  try {
    const rockets = await axios.get("https://api.spacexdata.com/v4/rockets");
    res.status(200).json(rockets.data);
  } catch (error) {
    res.status(500).json({ error: JSON.stringify(error) });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
