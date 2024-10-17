const express = require("express");

const PORT = 3000;

const app = express();

app.get("/", (_, res) => {
  for (let i = 0; i < 1000000000; i++) {
    // Heavey computation
  }

  res.json({ msg: "Ok!" });
});

app.listen(PORT, () => console.log("You all set...."));
