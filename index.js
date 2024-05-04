import express from "express";
import cors from "cors";
import getQuote from "./getQuote.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  const { type } = req.query;
  if (!type) req.query.type = "random";

  const quote = getQuote(type);
  res.status(200).json(quote);
});

app.listen(5000, () => {
  console.log("Server is running on port 3000");
});
