import Hapi from '@hapi/hapi';
import { Server } from 'socket.io';

const port = process.env.PORT || 3001;
const host = process.env.NODE_ENV === 'development' ? 'localhost' : null;

const connection = {};

const init = async () => {
  const server = Hapi.server({
    host,
    port,
    routes: {
      cors: {
        origin: ['*'],
        headers: [
          'Accept',
          'Authorization',
          'Content-Type',
          'If-None-Match',
        ],
        credentials: true,
        additionalHeaders: ['X-Requested-With'],
      },
    },
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: () => {
      return 'Hello my dear friend';
    },
  });

  const ioServer = server.listener;
  const io = new Server(ioServer, {
    cors: {
      origin: '*',
      credentials: true,
    },
  });

  io.on('connection', (socket) => {
    console.log('User is connection');
    connection[socket.id] = {};

    socket.once('start', (name) => {
      if (name) {
        connection[socket.id] = {
          ...connection[socket.id],
          name,
        };

        io.emit('chat online', {
          time: Date.now(),
          online: Object.keys(connection).length,
          names: Object.keys(connection)
            .map((item) => ({
              id: item,
              name: connection[item].name,
            })),
        });
      }
    });

    socket.on('chat message', (msg) => {
      io.emit('chat message', {
        time: Date.now(),
        name: connection[socket.id].name,
        msg,
        id: socket.id,
      });
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');

      delete connection[socket.id];
    });
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
