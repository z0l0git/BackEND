// Access and Delete a JSON file

// import express from "express";
// import { unlink, access } from "node:fs/promises";

// const port = 8000;
// const app = express();

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

// const filePath = "/Users/23LP5833/Desktop/backend/nodejs/mock.json";

// app.get("/", async (req, res) => {
//   try {
//     await access(filePath);
//     res.status(200);
//     res.set("Content-Type", "application/json");
//     res.sendFile(filePath);
//   } catch (err) {
//     res.status(404).send("File not found");
//   }
// });

// app.delete("/", async (req, res) => {
//   try {
//     res.status(200);
//     await unlink(filePath);
//     res.send("success");
//   } catch (err) {
//     res.status(404).send("File Deleted Already");
//   }
// });

// 2. index.js User Checker

// import mock from "./mockuser.json" assert { type: "json" };
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const app = express();

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
