# Documentation for Quotes-api Project

The Quotes-api project is a Node.js application that serves random quotes based on different categories like love, coding, and sad quotes. Here is a brief overview of the project structure and functionality:
 
### Functionality

- The Express server is set up to handle GET requests at the root endpoint ("/").

- The server responds with a random quote based on the type specified in the query parameter.

- If no type is provided, a random quote is returned by default.

## Available Types

The API supports the following types of quotes:

1. **Random:** Retrieve a random quote from the entire collection.
2. **Coding:** Get quotes related to coding, programming, and software development.
3. **Love:** Fetch quotes about love, romance, and relationships.
4. **Sad:** Obtain quotes that evoke feelings of sadness, melancholy, or introspection.

## Usage
To fetch a quote of a specific type, you can send a GET request to the API endpoint with the desired type as a query parameter. For example:

[GET](https://quotes-api-s8i5.onrender.com/?type=coding)
`GET https://quotes-api-s8i5.onrender.com/?type=coding` 

This request will return a JSON response containing a coding-related quote.

### Example Response
```json
{
  "quote": "The only way to learn a new programming language is by writing programs in it.",
  "author": "Dennis Ritchie"
}
```

### Dependencies

- **express**: Web framework for Node.js.

- **cors**: Middleware for enabling Cross-Origin Resource Sharing.


To run the project:

1. Install dependencies using `npm install` or `pnpm install`.

2. Start the server in development mode with `npm run dev` or `pnpm run dev`.

3. Access the quotes API at `http://localhost:5000`.


### Credits

The quotesApi project is created and maintained by [Daim](https://github.com/devdaim6). It may include quotes sourced from various authors, publications, or online repositories. Credits to the original authors are mentioned wherever possible.
