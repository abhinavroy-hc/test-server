const app = require('express')();

app.get('/', (req, res) => {
  res.send("success");
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});