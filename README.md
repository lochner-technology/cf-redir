# cf-redir

This is a simple Node.js application that runs a web server and redirects all requests to the Fayra Logistics eBay store.

## Usage

Install dependencies (none required) and run:

```bash
npm start
```

The server listens on `PORT` environment variable (default `3000`).

When accessed, it responds with an HTTP 302 redirect to:
<https://www.ebay.com/str/fayralogistics>
