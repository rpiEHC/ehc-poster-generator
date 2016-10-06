var generator = require("./generate");

var express = require('express');
var app = express();

let required_params = ["title", "description", "location", "time",
                       "event_date", "takedown"]
app.get('/', function (req, res) {

  let incorrect_params = required_params
    .filter(param => !req.query[param]);

  if (incorrect_params.length > 0)
    return res.send(`Missing query parameters: ${incorrect_params}`);

 console.log(req.query.description);

  generator.generate({
    title: req.query.title,
    description: req.query.description,
    location: req.query.location,
    time: req.query.time,
    event_date: req.query.event_date,
    takedown: req.query.takedown,
  }).then(() => {
    res.download('./result.svg', 'poster.svg', (err) => {
      if (err) console.log("Something went wrong");
    });
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
