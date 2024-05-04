import { randomQuotes, loveQuotes, codingQuotes, sadQuotes } from "./data.js";
export default function getQuote(type) {
   
  if (type === "love") {
    return loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
  }
  if (type === "coding") {
    return codingQuotes[Math.floor(Math.random() * codingQuotes.length)];
  }
  if (type === "sad") {
    return sadQuotes[Math.floor(Math.random() * sadQuotes.length)];
  }else{
    return randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
  }
}
