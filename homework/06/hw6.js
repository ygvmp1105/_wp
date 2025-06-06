import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("users.db");

db.query(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    email TEXT
  )
`);

const users = [
  { name: "Alice", age: 25, email: "alice@gmail.com" },
  { name: "Bob", age: 30, email: "bob@gmail.com" },
  { name: "Coco", age: 22, email: "Coco@gmail.com" },
];

for (const user of users) {
  db.query(
    "INSERT INTO users (name, age, email) VALUES (?, ?, ?)",
    [user.name, user.age, user.email],
  );
}

console.log("目前資料庫內的用戶：");
for (const [id, name, age, email] of db.query(
  "SELECT id, name, age, email FROM users",
)) {
  console.log(`ID: ${id}, 姓名: ${name}, 年齡: ${age}, 信箱: ${email}`);
}

db.close();
