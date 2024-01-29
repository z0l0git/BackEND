import express from "express";
import userRouter from "./routes/userRouter.js";
import postRouter from "./routes/postRouter.js";
import cors from "cors";

const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(postRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// const filePath = "/Users/23LP5833/Desktop/backend/nodejs/mockuser.json";

// const ReadFile = async () => {
//   try {
//     const oldUsers = await fs.readFileSync("./mockuser.json", "utf-8");
//     return oldUsers;
//   } catch (err) {
//     return null;
//   }
// };

// const readNotes = async () => {
//   try {
//     const oldNotes = await fs.readFileSync("./notes.json", "utf-8");
//     return oldNotes;
//   } catch (err) {
//     return null;
//   }
// };

// app.get("/", async (req, res) => {
//   try {
//     await access(filePath);
//     res.status(200);
//     const data = fs.readFileSync("./mockuser.json", "utf-8");
//     res.send(JSON.parse(data));
//   } catch (err) {
//     res.status(404).send("File not found");
//   }
// });

// app.get("/notes/:id", async (req, res) => {
//   try {
//     const isFileExist = await readNotes();

//     if (!isFileExist) {
//       await fs.writeFileSync("./notes.json", JSON.stringify({ notes: [] }));
//     }
//     const id = req.params.id;
//     const data = fs.readFileSync("./notes.json", "utf-8");
//     const notes = JSON.parse(data);

//     const userNotes = notes.notes.filter((el) => el.userID === id);
//     console.log(userNotes);
//     res.send(userNotes);
//     res.status(200);
//   } catch (err) {
//     res.status(404).send("File not found");
//   }
// });

// app.post("/notes", async (req, res) => {
//   const { userID, texts } = req.body;
//   if (!userID || !texts) {
//     // bgaa esehiig shalgah
//     throw new Error("Missing Params");
//   }
//   try {
//     const noteFileExist = await readNotes();
//     if (!noteFileExist) {
//       await fs.writeFileSync("./notes.json", JSON.stringify({ notes: [] }));
//     }
//     const newNoteFile = await readNotes();
//     const data = JSON.parse(newNoteFile);
//     data.notes.push({ userID, texts });
//     await writeFile("./notes.json", JSON.stringify(data));
//     res.status(200);
//     res.sendFile("./notes.json");
//   } catch (err) {
//     res.status(404).send("none existent");
//   }
// });

// app.post("/", async (req, res) => {
//   const { id, password, email } = req.body;
//   if (!email || !password || !id) {
//     // bgaa esehiig shalgah
//     throw new Error("Missing Params");
//   }
//   try {
//     const isFileExist = await ReadFile();

//     if (!isFileExist) {
//       await fs.writeFileSync("./mockuser.json", JSON.stringify({ users: [] }));
//     }

//     const newUserFile = await ReadFile();
//     const data = JSON.parse(newUserFile);

//     if (data.users.find((el) => el.email === email)) {
//       res.status(400).send("User Already Exists");
//       return;
//     }

//     data.users.push({ id, password, email });
//     await writeFile("./mockuser.json", JSON.stringify(data));
//     res.status(200);
//     res.sendFile(filePath);
//   } catch (err) {
//     res.status(404).send("none existent");
//   }
// });

// app.post("/update", async (req, res) => {
//   const { id, email: upEmail, password } = req.body;
//   const allUsers = await ReadFile();
//   const { users } = JSON.parse(allUsers);
//   const correctUser = users.find(({ email }) => {
//     if (email === upEmail) {
//       return true;
//     }
//   });
//   correctUser.id = id;
//   correctUser.password = password;

//   await writeFile("./mockuser.json", JSON.stringify({ users }));
//   res.send("update");
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

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

// // 2. index.js User Checker

// // import mock from "./mockuser.json" assert { type: "json" };
// // import express from "express";
// // import dotenv from "dotenv";

// // dotenv.config();

// // const port = process.env.PORT;
// // const app = express();
// // app.use(express.json());

// // app.get("/", (req, res) => {
// //   try {
// //     res.set("Content-Type", "application/json");
// //     // res.status(200).send(mock.users[0]);
// //     if (req.query.id) {
// //       const user = mock.users.find((user) => user.id === req.query.id);
// //       res.status(200).send(user);
// //     } else if (req.query.email) {
// //       const user = mock.users.find((user) => user.email === req.query.email);
// //       res.status(200).send(user);
// //     }
// //   } catch (err) {
// //     res.status(400).send("Bad Request");
// //   }
// // });

// // app.post("/signup", (req, res) => {
// //   try {
// //     const { id, email } = req.body;
// //     if (id && email) res.status(200).send({ msg: "User Created Successfully" });
// //     res.status(400).send({ msg: "User Already Exists" });
// //   } catch (err) {
// //     res.status(400).send("Bad Request");
// //   }
// // });

// // app.listen(port, () => {
// //   console.log(`Server is listening on port ${port}`);
// // });
