const experss = require("express");

const app = experss();

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.post("/", (req, res) => {
  res.send({
    name: "Md akram sheikh",
    email: "dev.mdakram@gmail.com",
    phoneNumber: "01790825863",
    city: "Bogura",
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
