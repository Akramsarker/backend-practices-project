const experss = require("express");

const app = experss();

// app.use(experss.json());
// app.use(experss.raw());
// app.use(experss.text());
// app.use(experss.urlencoded());

// app.use(
//   express.static(`${__dirname}/public/`, {
//     index: "home.html",
//   })
// );

var router = express.Router();

app.use(router);

// app.get("/", (req, res) => {
//   // console.log(req.body.name);

//   res.send("This is home page");
// });

router.get("/about", (req, res) => {
  res.send("This is home page");
});

app.post("/", (req, res) => {
  // console.log(req.body.toString());
  // console.log(req.body);

  // res.send({
  //   // name: "Md akram sheikh",
  //   // email: "dev.mdakram@gmail.com",
  //   // phoneNumber: "01790825863",
  //   // city: "Bogura",
  //   // name: "This is post request",
  // });
  res.send("This is home page with post request");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
