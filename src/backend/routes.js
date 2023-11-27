const {
  addAnimalHandler,
  getAnimalHandler,
  getAnimalByIdHandler,
  EditAnimalByIdHandler,
  DeleteAnimalByIdHandler,
  getSearchAnimalHandler,
} = require('./handler');

const routes = [
  // handler menabahkan data animals
  {
    method: 'POST',
    path: '/animals',
    handler: addAnimalHandler,
  },
  // handler request semua data animals
  {
    method: 'GET',
    path: '/animals',
    handler: getAnimalHandler,
  },
  // handler request data animals berdasarkan id
  {
    method: 'GET',
    path: '/animals/{id}',
    handler: getAnimalByIdHandler,
  },
  // handler request data animals berdasarkan nama hewan
  {
    method: 'GET',
    path: '/search',
    handler: getSearchAnimalHandler,
  },
  // handler edit data animals berdasarkan id
  {
    method: 'PUT',
    path: '/animals/{id}',
    handler: EditAnimalByIdHandler,
  },
  // handler hapus data animals berdasarkan id
  {
    method: 'DELETE',
    path: '/animals/{id}',
    handler: DeleteAnimalByIdHandler,
  },
];

module.exports = routes;
