/* eslint-disable no-undef */
const Hapi = require("@hapi/hapi");
const mongoose = require("mongoose");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["http://localhost:3000"],
        headers: ["Authorization", "Content-Type"],
        additionalHeaders: ["X-Requested-With"],
        credentials: true,
      },
    },
  });

  // mongoose.connect('mongodb+srv://capstonedcd2023:Dicoding2023@capstone-project.frtoemt.mongodb.net/SOS');

  mongoose.connect(
    "mongodb://capstonedcd2023:Dicoding2023@ac-pamozt8-shard-00-00.frtoemt.mongodb.net:27017,ac-pamozt8-shard-00-01.frtoemt.mongodb.net:27017,ac-pamozt8-shard-00-02.frtoemt.mongodb.net:27017/SOS?ssl=true&replicaSet=atlas-yd6omn-shard-0&authSource=admin&retryWrites=true&w=majority"
  );

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
