const {
  addAnimalHandler,
  getAnimalHandler,
  getSearchAnimalHandler,
  getAnimalByIdHandler,
  editAnimalByIdHandler,
  deleteAnimalByIdHandler,
  addLembagaHandler,
  getLembagaHandler,
  getLembagaByIdHandler,
  editLembagaByIdHandler,
  deleteLembagaByIdHandler,
  paymentHandler,
  registerUserHandler,
  loginUserHandler,
  isUserLoggedIn,
  userLogoutHandler
} = require('./handler');

const routes = [
  // Animals Endpoints
  {
    method: 'POST',
    path: '/animals',
    handler: addAnimalHandler,
  },
  {
    method: 'GET',
    path: '/animals',
    handler: getAnimalHandler,
  },
  {
    method: 'GET',
    path: '/animals/{id}',
    handler: getAnimalByIdHandler,
  },
  {
    method: 'GET',
    path: '/search',
    handler: getSearchAnimalHandler,
  },
  {
    method: 'PUT',
    path: '/animals/{id}',
    handler: editAnimalByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/animals/{id}',
    handler: deleteAnimalByIdHandler,
  },

  // Lembaga Endpoints
  {
    method: 'POST',
    path: '/lembaga',
    handler: addLembagaHandler,
  },
  {
    method: 'GET',
    path: '/lembaga',
    handler: getLembagaHandler,
  },
  {
    method: 'GET',
    path: '/lembaga/{id}',
    handler: getLembagaByIdHandler,
  },
  {
    method: 'PUT',
    path: '/lembaga/{id}',
    handler: editLembagaByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/lembaga/{id}',
    handler: deleteLembagaByIdHandler,
  },
  {
    method: 'POST',
    path: '/api/v1/payment',
    handler: paymentHandler,
  },

  // Authentication Endpoint
  {
    method: 'POST',
    path:  '/register',
    handler: registerUserHandler,
  },
  {
    method: 'POST',
    path:  '/login',
    handler: loginUserHandler,
  },
  {
    method: 'GET',
    path:  '/isLogged',
    handler: isUserLoggedIn,
  },
  {
    method: 'GET',
    path: '/logout',
    handler: userLogoutHandler,
  }
];

module.exports = routes;
