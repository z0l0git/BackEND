const axios = require("axios");

const getData = async () => {
  await axios
    .get("https://dummyapi.io/data/v1/post", {
      headers: {
        "app-id": "65adda018be17a4bd499e341",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
getData();
