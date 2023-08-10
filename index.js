const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const server = jsonServer.create();
const db = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json")));
const router = jsonServer.router(db);
const middleware = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middleware);
server.use(router);

server.listen(8000, () => {
  try {
    console.log("server is running");
  } catch (error) {
    console.log(error);
  }
});
