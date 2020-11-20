const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    "hi there motherfucker, you must be very stupid, please make sure to work"
  );
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
