// 由于node 操作数据库的步骤 复杂且 相同， 遂封装 ， 可以提供代码复用性

// 详细的使用步骤：
// 1- 引入mysql 模块
// 2- 准备好 数据库配置信息 (账号密码， ip端口)
// 3- 创建一个数据库连接对象
// 4- 数据库连接对象 去连接数据库
// 5- 操作 [增删改查]
// 6- 断开数据库连接

// 1- 引入mysql 模块
const mysql = require("mysql");

//   2- 准备好 数据库配置信息 (账号密码， ip端口)
let info = {
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "node-practice", // 注意细节！！！
};

// 封装操作数据库公共代码：
function db(sql, param, fn) {
  //  1- 创建一个数据库连接对象
  const con = mysql.createConnection(info);
  // 2- 连接上数据
  con.connect();
  // 3- 操作数据
  // con.query(sql, sql参数， 执行完成后回调函数);
  con.query(sql, param, (err, data) => {
    if (err) {
      return console.log(err);
    }
    // 成功
    fn && fn(data);
  });
  // 4- 断开数据库
  con.end();
}

// 导出数据
module.exports = db;
