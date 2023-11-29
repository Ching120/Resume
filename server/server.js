const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");


app.use(cors()); 
app.use(express.json()); 

const pool = mysql.createPool({
  host: "localhost", // localhost
  user: "root", 
  password: "root", 
  database: "message_board", 
  port: 3307,
  connectionLimit: 10, 
});


pool.getConnection((err, connection) => {
  if (err) {
    console.error("無法連接到mysql：", err);
    return;
  }
  console.log("mysql連接成功");
  connection.release();
});


app.post("/api/login", (req, res) => {
  const { user_id, user_pwd } = req.body;
  pool.query(
    "SELECT * FROM `user` WHERE `user_id` = ? AND `user_pwd` = ?",
    [user_id, user_pwd],
    (err, results) => {
      if (err) {
        console.error("Error querying MySQL:", err);
        res.status(500).json({ message: "伺服器錯誤" });
      } else {
        if (results.length > 0) {
          res.json({ message: "登入成功" });
        } else {
          res.status(401).json({ message: "無此用戶" });
        }
      }
    }
  );
});

app.post("/api/register", (req, res) => {
  const { user_id, user_pwd, user_name } = req.body;

  pool.query(
    "INSERT INTO `user` (`user_id`, `user_pwd`, `user_name`) VALUES (?, ?, ?)",
    [user_id, user_pwd, user_name],
    (err, result) => {
      if (err) {
        console.error("Error inserting into MySQL:", err);
        res.status(500).json({ message: "伺服器錯誤" });
      } else {
        if (result.affectedRows > 0) {
          // 新增成功
          const insertedUserId = result.insertId;
          res.status(201).json({
            message: "Registration successful",
            userId: insertedUserId,
          });
        } else {
          // 新增失敗
          res.status(500).json({ message: "伺服器錯誤" });
        }
      }
    }
  );
});


app.get("/api/messages", (req, res, next) => {
  pool.query("SELECT * FROM message", (err, results) => {
    if (err) {
      console.error("Error querying MySQL:", err);
      next(err); 
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

  pool.query("INSERT INTO message SET ?", newMessage, (err, result) => {
    if (err) {
      console.error("Error inserting into MySQL:", err);
      next(err); 
    } else {
      newMessage.id = result.insertId;
      res.status(201).json(newMessage);
    }
  });
});


app.delete("/api/messages/:id", (req, res, next) => {
  const { id } = req.params;


  pool.query("DELETE FROM message WHERE id = ?", [id], (err) => {
    if (err) {
      console.error("Error deleting from MySQL:", err);
      next(err); 
    } else {
      res.status(204).end();
    }
  });
});

app.put("/api/messages/:id", (req, res, next) => {
  const { id } = req.params;
  const updatedMessage = {
    user_message: req.body.user_message,
  };

  pool.query(
    "UPDATE message SET ? WHERE id = ?",
    [updatedMessage, id],
    (err) => {
      if (err) {
        console.error("Error updating MySQL:", err);
        next(err);
      } else {
        res.status(200).json(updatedMessage);
      }
    }
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
