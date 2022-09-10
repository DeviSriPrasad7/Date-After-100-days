const addDays = require("date-fns/addDays");
//
const express = require("express");
const app = express();

module.exports = app.get("/", (request, response) => {
  let dateAfterHundredDays = addDays(new Date(), 100);
  response.send(
    `${dateAfterHundredDays.getDate()}/${
      dateAfterHundredDays.getMonth() + 1
    }/${dateAfterHundredDays.getFullYear()}`
  );
});

app.listen(3000);
