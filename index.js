import express from "express";
import cors from "cors";
import getQuote from "./getQuote.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  })
);

app.get("/", (req, res) => {
  const { type } = req.query;
  if (!type) req.query.type = "random";

  const quote = getQuote(type);
  if (quote === "Invalid type") {
    res.status(400).json({
      error: "Invalid type",
      info: "Please check endpoint /types for further information.",
    });
  }

  res.status(200).json(quote);
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
