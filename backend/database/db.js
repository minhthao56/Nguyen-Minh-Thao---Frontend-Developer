const fs = require("fs");

function readDB() {
  try {
    return JSON.parse(fs.readFileSync("./db.json"));
  } catch (error) {
    return error;
  }
}

function createUser(user) {
  try {
    const user_id = new Date().getTime();
    const dataBD = readDB();
    const userBD = { ...user, user_id };
    dataBD.push(userBD);

    fs.writeFileSync("./db.json", JSON.stringify(dataBD));
    return user;
  } catch (error) {
    return error;
  }
}
function getOneByEmail(email) {
  try {
    const dataBD = readDB();
    for (const user of dataBD) {
      if (user.email === email) {
        return user;
      }
    }
    return {};
  } catch (error) {
    return error;
  }
}

module.exports = {
  createUser,
  getOneByEmail,
};
