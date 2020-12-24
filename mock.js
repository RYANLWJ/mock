const fs = require("fs").promises;
const interfaces = require("./interfaces.js");

let mock = {};
// 输出对应的回调函数
interfaces.forEach(({ name }) => {
  mock[name] = async (req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    try {
      const data = await fs.readFile(__dirname + "/jsonFiles/" + name + ".json");
      res.json(JSON.parse(data));
    } catch (err) {
      throw err;
    }
  };
});

module.exports = mock;
