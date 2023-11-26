const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://capstonedcd2023:Dicoding2023@capstone-project.frtoemt.mongodb.net/SOS';
const client = new MongoClient(uri);

const animalModel = mongoose.model('animals', {
  namaHewan: String,
  daerah: String,
  status: String,
  tempatHidup: String,
  deskripsi: String,
  ciriFisik: Array,
  distribusiHabitat: String,
  ancamanPerlindunganHukum: String,
  gambarLandscape: String,
  gambarPotrait: String,
});

// POST data animals
const addAnimalHandler = async (request, h) => {
  // eslint-disable-next-line new-cap
  const animals = new animalModel(request.payload);
  const result = await animals.save();
  return h.response(result);
};

// GET semua data animals
const getAnimalHandler = async (request, h) => {
  const animals = await animalModel.find().exec();
  return h.response(animals);
};

// GET data animals berdasarkan keyword dari nama hewan, contoh "http://localhost:9000/search?searchTerm=keyword"
const getSearchAnimalHandler = async (request, h) => {
  const db = client.db('SOS');
  const collection = db.collection('animals');
  const { searchTerm } = request.query;

  const searchResults = await collection.aggregate([
    {
      $search: {
        index: 'search',
        text: {
          query: searchTerm,
          path: 'namaHewan',
        },
      },
    },
  ]).toArray();
  return h.response(searchResults);
};

// GET data animals berdasarkan id
const getAnimalByIdHandler = async (request, h) => {
  const animals = await animalModel.findById(request.params.id).exec();
  return h.response(animals);
};

// PUT data animals berdasarkan id
const EditAnimalByIdHandler = async (request, h) => {
  // eslint-disable-next-line max-len
  const result = await animalModel.findByIdAndUpdate(request.params.id, request.payload, { new: true });
  return h.response(result);
};

// DELETE data animals berdasarkan id
const DeleteAnimalByIdHandler = async (request, h) => {
  const result = await animalModel.findByIdAndDelete(request.params.id);
  return h.response(result);
};

module.exports = {
  addAnimalHandler,
  getAnimalHandler,
  getAnimalByIdHandler,
  EditAnimalByIdHandler,
  DeleteAnimalByIdHandler,
  getSearchAnimalHandler,
};
