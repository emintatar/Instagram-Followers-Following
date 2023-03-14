const express = require("express");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";
const followers = require("./followers.json");
const following = require("./following.json");

app.get("/", (req, res) => {
  const arr = [];

  for (let i = 0; i < following.length; i++) {
    let control = true;
    for (let j = 0; j < followers.length; j++) {
      if (
        following[i].string_list_data[0].value ===
        followers[j].string_list_data[0].value
      ) {
        control = false;
        break;
      }
    }
    if (control) {
      arr.push(following[i].string_list_data[0].value);
    }
  }

  res.json(arr);
});

app.get("/followers", (req, res) => {
  res.json(followers);
});

app.get("/following", (req, res) => {
  res.json(following);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
