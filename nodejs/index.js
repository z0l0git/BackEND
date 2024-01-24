import express from "express";
import fs from "fs";
import mock from "./mock.json" assert { type: "json" };

const port = 8000;
const app = express();

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.status(200);
  res.setHeader("Content-Type", "application/json");
  try {
    res.send(mock);
  } catch (err) {
    res.send("file missing");
  }
});

app.delete("/", (req, res) => {
  res.status(200);
  fs.unlink("./mock.json", (err) => {
    if (err) {
      // An error occurred while deleting the file
      if (err.code === "ENOENT") {
        // The file does not exist
        console.error("The file does not exist");
      } else {
        // Some other error
        console.error(err.message);
      }
    } else {
      // The file was deleted successfully
      console.log("The file was deleted");
    }
  });
  res.end("deleted");
});
