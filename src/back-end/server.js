/* eslint-disable no-undef */
const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  mongoose.connect('mongodb+srv://capstonedcd2023:Dicoding2023@capstone-project.frtoemt.mongodb.net/SOS');

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
