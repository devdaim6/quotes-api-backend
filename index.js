const express = require("express");
const cors = require("cors");
const { getQuote } = require("./getQuote.js");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  const { type } = req.query;
  if (!type) req.query.type = "random";

  const quote = getQuote(type);
  if (quote === "Invalid type") {
    res.status(400).json({
      error: "Invalid type",
      info: "Please check endpoint /types for further information.",
    });
  } else res.status(200).json(quote);
});

app.get("/types", (req, res) => {
  res.status(200).json({
    types: [
      "love",
      "coding",
      "sad",
      "motivational",
      "success",
      "islamic",
      "philosophy",
      "friendship",
      "humility",
      "humour",
      "lifeLesson",
      "literary",
      "nature",
    ],
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

export default app;
