const express = require("express");

const app = express();
app.use(express.json());

app.listen(3002, () => {
  console.log(`Server running on port 3002 \nhttp://localhost:3002`);
});
app.get("/", (req, res) => {
  try {
    res.json({ message: "Hello World!", success: true });
  } catch (err) {
    console.error(err);
  }
});
