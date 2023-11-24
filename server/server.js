const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");

app.use(cors()); // 启用CORS
app.use(express.json()); // JSON请求

const pool = mysql.createPool({
  host: "localhost", // localhost
  user: "root", //数据库用户名
  password: "root", // 数据库密码
  database: "message_board", // 数据库名称
  port: 3307,
  connectionLimit: 10, // 连接池大小
});

// 连接数据库
pool.getConnection((err, connection) => {
  if (err) {
    console.error("无法连接到mysql数据库：", err);
    return;
  }
  console.log("mysql数据库连接成功");
  connection.release(); // 释放连接
});

// 全局错误处理中间件
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// GET 获取所有留言
app.get("/api/messages", (req, res, next) => {
  // 使用 MySQL 查询获取留言
  pool.query("SELECT * FROM message", (err, results) => {
    if (err) {
      console.error("Error querying MySQL:", err);
      next(err); // 使用错误处理中间件
    } else {
      res.json(results);
    }
  });
});

app.post("/api/messages", (req, res, next) => {
  const newMessage = {
    user_name: "ching",
    user_message: req.body.user_message,
  };

  // 使用 MySQL 插入新留言
  pool.query("INSERT INTO message SET ?", newMessage, (err, result) => {
    if (err) {
      console.error("Error inserting into MySQL:", err);
      next(err); // 使用错误处理中间件
    } else {
      newMessage.id = result.insertId;
      res.status(201).json(newMessage);
    }
  });
});

// DELETE 删除特定 ID 的留言
app.delete("/api/messages/:id", (req, res, next) => {
  const { id } = req.params;

  // 使用 MySQL 删除留言
  pool.query("DELETE FROM message WHERE id = ?", [id], (err) => {
    if (err) {
      console.error("Error deleting from MySQL:", err);
      next(err); // 使用错误处理中间件
    } else {
      res.status(204).end();
    }
  });
});

app.put("/api/messages/:messageId", (req, res, next) => {
  const { messageId } = req.params;

  // 获取从前端发送过来的编辑内容
  const editMessage = {
    user_message: req.body.user_message,
  };

  // 使用 MySQL 更新留言
  pool.query(
    "UPDATE message SET ? WHERE id = ?",
    [editMessage, messageId],
    (err, result) => {
      if (err) {
        console.error("Error updating MySQL:", err);
        next(err);
      } else {
        res.status(200).json(editMessage);
      }
    }
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
