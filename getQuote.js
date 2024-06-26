const {
  loveQuotes,
  codingQuotes,
  sadQuotes,
  inspirationQuotes,
  motivationalQuotes,
  successQuotes,
  islamicQuotes,
  philosophyQuotes,
  friendshipQuotes,
  humilityQuotes,
  humourQuotes,
  lifeLessonQuotes,
  literaryQuotes,
  natureQuotes,
} = require("./data.js");

exports.getQuote = function getQuote(type) {
  switch (type) {
    case "love":
      return loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
    case "coding":
      return codingQuotes[Math.floor(Math.random() * codingQuotes.length)];
    case "sad":
      return sadQuotes[Math.floor(Math.random() * sadQuotes.length)];
    case "inspiration":
      return inspirationQuotes[
        Math.floor(Math.random() * inspirationQuotes.length)
      ];
    case "motivational":
      return motivationalQuotes[
        Math.floor(Math.random() * motivationalQuotes.length)
      ];
    case "success":
      return successQuotes[Math.floor(Math.random() * successQuotes.length)];
    case "islamic":
      return islamicQuotes[Math.floor(Math.random() * islamicQuotes.length)];
    case "philosophy":
      return philosophyQuotes[
        Math.floor(Math.random() * philosophyQuotes.length)
      ];
    case "friendship":
      return friendshipQuotes[
        Math.floor(Math.random() * friendshipQuotes.length)
      ];
    case "humility":
      return humilityQuotes[Math.floor(Math.random() * humilityQuotes.length)];
    case "humour":
      return humourQuotes[Math.floor(Math.random() * humourQuotes.length)];
    case "lifeLesson":
      return lifeLessonQuotes[
        Math.floor(Math.random() * lifeLessonQuotes.length)
      ];
    case "literary":
      return literaryQuotes[Math.floor(Math.random() * literaryQuotes.length)];
    case "nature":
      return natureQuotes[Math.floor(Math.random() * natureQuotes.length)];
    case "random":
      const allQuotes = [].concat(
        loveQuotes,
        codingQuotes,
        sadQuotes,
        inspirationQuotes,
        motivationalQuotes,
        successQuotes,
        islamicQuotes,
        philosophyQuotes,
        friendshipQuotes,
        humilityQuotes,
        humourQuotes,
        lifeLessonQuotes,
        literaryQuotes,
        natureQuotes
      );
      return allQuotes[Math.floor(Math.random() * allQuotes.length)];

    default:
      return "Invalid type";
  }
};
