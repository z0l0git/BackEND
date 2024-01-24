// get posts from dummy api

const axios = require("axios");

const getPost = async (id) => {
  try {
    await axios
      .get("https://dummyapi.io/data/v1/post?page=2&limit=1", {
        headers: {
          "app-id": id,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  } catch (error) {
    console.log(error.message);
  }
};

// Get user data from dummy api

const getUser = async (id) => {
  try {
    const result = await axios.get(
      "https://dummyapi.io/data/v1/user?page=1&limit=5",
      {
        headers: {
          "app-id": id,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(result.data);
  } catch (error) {
    console.log(error.message);
  }
};

// server run on local 8000

const tryIt = async () => {
  try {
    await getPost("65adda018be17a4bd499e341");
    await getUser("65adda018be17a4bd499e34");
  } catch (error) {
    console.log(error.message);
  }
};

const http = require("http");
const { open } = require("node:fs/promises");

const getWords = async () => {
  const words = [];

  const file = await open("./info.txt");
  const text = await file.readLines();

  for await (const line of text) {
    words.push(line);
  }
  return words;
};

const port = 8000;
const server = http.createServer(async (request, response) => {
  try {
    const words = await getWords();
    const newWords = words.map((el) => {
      return el.split(",");
    })[0];
    return newWords;
  } catch (error) {
    console.log(error.message);
  }

  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");

  response.end(`${newWords[0]} ,${newWords[1]}, hello`);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
