const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // 啟用CORS
app.use(express.json()); // JSON請求

let messages = []; // 儲存留言的模擬資料庫

// GET 取得所有留言。

app.get("/api/messages", (req, res) => {
  res.json(messages);
});

//  POST 創新留言。
app.post("/api/messages", (req, res) => {
  const newMessage = {
    id: messages.length + 1,
    text: req.body.text,
    createdAt: new Date().toISOString(),
  };
  messages.push(newMessage);
  res.status(201).json(newMessage);
});

// DELETE 端點來刪除特定 ID 的留言。
app.delete("/api/messages/:id", (req, res) => {
  const { id } = req.params;
  messages = messages.filter((message) => message.id !== parseInt(id));
  res.status(204).end();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
