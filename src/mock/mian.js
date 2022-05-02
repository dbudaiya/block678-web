// 在HelloWorld中进行axios数据请求
const path = require("path");
const fs = require("fs");
const json5 = require("json5");
const Mock = require("mockjs");

// 读取JSON5文件
function getInfoFile(filename) {
  return json5.parse(
    fs.readFileSync(path.resolve(__dirname, filename), "utf-8")
  );
}

// 返回衣蛾函数
module.exports = function(app) {
  app.get("/user/userinfo", function(req, res) {
    res.json(Mock.mock(getInfoFile("./userinfo.json5")));
  });
};
