/**
 * Created by psquicciarini on 5/26/17.
 */

const Hapi = require('hapi');
const inert = require('inert');
const path = require('path');

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: path.join(__dirname, 'dist'),
      },
    },
  },
});
server.connection({
  port: process.env.PORT || 3030,
});

server.register(inert, (err) => {
  if (err) {
    throw err;
  }
});

server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: '.',
    },
  },
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
