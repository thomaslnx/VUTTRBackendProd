const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db-1575461292063.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
