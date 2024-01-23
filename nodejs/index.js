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

const tryIt = async () => {
  try {
    await getPost("65adda018be17a4bd499e341");
    await getUser("65adda018be17a4bd499e34");
  } catch (error) {
    console.log(error.message);
  }
};

tryIt();
