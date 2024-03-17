# Website Title Fetcher

This project is a Node.js server that fetches the titles of websites provided as query parameters in the URL. It includes implementations for fetching website titles using plain Node.js callbacks, a flow library (async.js), and Promises.

## Setup

1. Clone this repository to your local machine.
2. Ensure you have Node.js and npm installed.
3. Install dependencies using `npm install`.

## Usage

### Task 1: Plain Node.js Callbacks

To run the server using plain Node.js callbacks, execute:

```bash
node USING-PLAIN-NODE-CALLBACKS.js
```

### Task 2: Flow Library (async.js)

To run the server using async.js, execute:

```bash
node USING-FLOW-LIBRARY.js
```

### Task 3: Promises

To run the server using Promises, execute:

```bash
node USING-PROMISES.js
```

The server will be running on port 3000 by default.

## How to Use

Once the server is running, you can access the endpoint `GET /I/want/title/` with the `address` query parameter to fetch the titles of the provided websites.

Example:

```bash
curl "http://localhost:3000/I/want/title/?address=example.com&address=google.com"
```
