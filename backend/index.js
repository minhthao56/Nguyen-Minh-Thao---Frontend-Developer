const express = require("express");
const axios = require("axios");
const app = express();
const db = require("./database/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
const { verifyJWT } = require("./middleware/auth");
const { PORT, SECRET } = require("./constants/app");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use(verifyJWT);

app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).json("All input is required");
    }
    const oldUser = db.getOneByEmail(email);
    if (oldUser) {
      return res.status(409).json("User Already Exist. Please Login");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = db.createUser({
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    const token = jwt.sign({ email }, SECRET);
    return res.status(201).json({ email: user.token, token });
  } catch (err) {
    return res.status(500).json({ error: JSON.stringify(err) });
  }
});
// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = db.getOneByEmail(email);
    if (!oldUser) {
      return res
        .status(409, `The ${email} is not existed. Please Sign Up`)
        .json(`The ${email} is not existed. Please Sign Up`);
    }

    const correctPassword = await bcrypt.compare(password, oldUser.password);

    if (!correctPassword) return res.status(400).json("Password is incorrect");

    const token = jwt.sign({ email }, SECRET);

    return res.status(201).json({ email, token });
  } catch (error) {
    return res.status(500).json({ error: JSON.stringify(error) });
  }
});

app.get("/whoiam", (req, res) => {
  const email = req.email;
  const user = db.getOneByEmail(email);
  res.status(200).json(user);
});

app.get("/rockets", async (req, res) => {
  const query = req.query;
  try {
    const rockets = await axios.get("https://api.spacexdata.com/v4/rockets");

    if (query.search !== "") {
      const results = [];
      for (let rocket of rockets.data) {
        const name = rocket.name.toLocaleLowerCase();
        if (name.includes(query.search.toLocaleLowerCase())) {
          results.push(rocket);
        }
      }
      return res.status(200).json(results);
    }
    res.status(200).json(rockets.data);
  } catch (error) {
    res.status(500).json({ error: JSON.stringify(error) });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
