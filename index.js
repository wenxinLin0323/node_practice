// 引入
const express = require("express");
const router = require("./router");
const bodyParser = require("body-parser");
const session = require("express-session");

// 创建服务器
const app = express();

// 设置session
app.use(
  session({
    secret: "node-practice",
    name: "node",
  })
);

// 配置模板引擎
app.engine("html", require("express-art-template"));

// 设置模板引擎
app.set("views", "pages");

// 静态资源托管
app.use("/assets", express.static("assets"));

// 给req.body赋值
app.use(bodyParser.urlencoded({ extended: false }));

// 观察session
app.use((req, res, next) => {
  console.log("session:", req.session);
  if (req.session.isLogin || req.url == "/login") {
    next();
  } else {
    res.redirect("/login");
  }
});

// 处理外置路由
app.use(router);

// 启动服务器;
app.listen(9999, () => console.log("http://localhost:9999 服务器已启动"));
