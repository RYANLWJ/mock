const fs = require("fs"); // 注意path在node_modules那一层
const interfaces = require("./interfaces.js");

let mock = {};
// 输出对应的回调函数
interfaces.forEach(({ name }) => {
  mock[name] = (req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    fs.readFile("../mock/" + name + ".json", function (err, data) {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  };
});

module.exports = mock;
