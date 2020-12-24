const fs = require("fs");

/* Json数据写入  */
exports["writeJson"] = ({ fileName, params, suss, fail }) => {
  fs.readFile("../mock/" + fileName + ".json", function (err, data) {
    if (err) {
      return fail && fail(err);
    }

    let person = data.toString(); // 将二进制的数据转换为字符串
    person = JSON.parse(person); // 将字符串转换为json对象
    params.id = person.results.length + 1;
    person.results.push(params); // 将传来的对象push进数组对象中
    person.total = person.results.length; // 定义一下总条数，为以后的分页打基础

    let str = JSON.stringify(person); //  因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
    fs.writeFile("../mock/" + fileName + ".json", str, function (err) {
      if (err) {
        return fail && fail(err);
      }
      suss();
    });
  });
};

/* 读取JSON数据 */
exports["readJson"] = ({ fileName, suss, fail }) => {
  fs.readFile("../mock/" + fileName + ".json", function (err, data) {
    err ? fail && fail(err) : suss(JSON.parse(data.toString())["results"]);
  });
};

/* 更新某条数据 */
exports["updateJson"] = ({ fileName, params, suss, fail }) => {
  fs.readFile("../mock/" + fileName + ".json", function (err, data) {
    if (err) {
      return fail && fail(err);
    }

    let person = data.toString(); // 将二进制的数据转换为字符串
    person = JSON.parse(person); // 将字符串转换为json对象

    let id = params.id;
    let newPersonList = person.results.map((item) => {
      if (item["id"] == id) {
        item = { ...item, ...params };
      }
      return item;
    });
    person.results = newPersonList;
    // console.log("newPersonList", newPersonList)

    // person.results.push(params); // 将传来的对象push进数组对象中
    // person.total = person.results.length; // 定义一下总条数，为以后的分页打基础

    let str = JSON.stringify(person); //  因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
    fs.writeFile("../mock/" + fileName + ".json", str, function (err) {
      if (err) {
        return fail && fail(err);
      }
      suss();
    });
  });
};
