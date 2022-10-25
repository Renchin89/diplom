// import express from "express";
import next from "next";

const { NODE_ENV = "development", PORT = "3000" } = process.env;

const dev = NODE_ENV === "development";
const app = next({ dev });
// const handle = app.getRequestHandler();
// const server = express();

app.prepare().catch((exception) => {
  console.error(exception.stack);
});
