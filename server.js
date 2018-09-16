const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const request = require("request");
var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.listen(port, () => console.log(`Listening on port ${port}`));


// app.use(express.bodyParser());

app.post("/api/test", (req, res) => {
  console.log(req.body.food);
  let food = req.body.food;
  const url = "http://www.themealdb.com/api/json/v1/1/search.php?s=" + food;
  // const url = "http://api.giphy.com/v1/gifs/random?api_key=nmyDoNuU7ZFmjpQCMgUY90iJvBsoPehA";
  request.get(url, (err, response, body) => {
    if (err) {
      console.error(err);
    }

    body = JSON.parse(body);

    //to get the .gif's URL from the Giphy response body:
    const meals = [];
    body.meals.forEach(data => {
      meals.push(data.strMeal);
    });

    // const imgUrl = body.data.image_url;
    // res.setHeader('Content-Type', 'applicaiton/json')
    res.json({ express: meals });
    console.log(meals);
  });
});
