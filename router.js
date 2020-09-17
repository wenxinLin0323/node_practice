// 引入
const express = require("express");
const db = require("./db");
const path = require("path");
const moment = require("moment");

// 创建外置路由对象
const router = express.Router();

// 绑定路由
router.get(["/index", "/"], (req, res) => {
  db("select * from message ", null, (data) => {
    // console.log(data);
    let obj = {
      list: data,
    };
    res.render("index.html", obj);
  });
});

// 添加
router.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/add.html"));
});

// POST添加留言
router.post("/submit", (req, res) => {
  let info = req.body;
  info.created = moment().format("YYYY-MM-DD HH:mm:ss");
  // console.log(req.body);
  db("insert into message set ? ", info, () => res.redirect("/"));
});

// 删除
router.get("/delete", (req, res) => {
  db("delete from message where id = ?", req.query.id, () => res.redirect("/"));
});

// 登录页
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/login.html"));
});

// 登陆请求
router.post("/login", (req, res) => {
  // console.log(req.body);
  let { username, password } = req.body;
  db(
    "select * from user where username = ? and password = ?",
    [username, password],
    (data) => {
      // console.log("data:", data);
      if (data.length > 0) {
        req.session.isLogin = true;
        res.redirect("/");
      } else {
        res.redirect("/login");
      }
    }
  );
});

// 退出
router.get("/logout", (req, res) => {
  req.session.isLogin = null;
  res.redirect("/login");
});

// 导出
module.exports = router;
