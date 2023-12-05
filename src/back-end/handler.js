const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const midtransClient = require('midtrans-client');

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

const lembagaModel = mongoose.model('lembagas', {
  namaLembagaYayasan: String,
  overview: String,
  kontak: String,
  website: String,
  gambar: Array,
});

// POST data animals
const addAnimalHandler = async (request, h) => {
  const animals = new animalModel(request.payload);
  const result = await animals.save();
  return h.response(result);
};

// GET semua data animals
const getAnimalHandler = async (request, h) => {
  const animals = await animalModel.find().exec();
  return h.response(animals);
};

// GET data animals berdasarkan keyword dari nama hewan
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
const editAnimalByIdHandler = async (request, h) => {
  const result = await animalModel.findByIdAndUpdate(request.params.id, request.payload, { new: true });
  return h.response(result);
};

// DELETE data animals berdasarkan id
const deleteAnimalByIdHandler = async (request, h) => {
  const result = await animalModel.findByIdAndDelete(request.params.id);
  return h.response(result);
};

// POST data lembaga
const addLembagaHandler = async (request, h) => {
  const lembaga = new lembagaModel(request.payload);
  const result = await lembaga.save();
  return h.response(result);
};

// GET semua data lembaga
const getLembagaHandler = async (request, h) => {
  const lembaga = await lembagaModel.find().exec();
  return h.response(lembaga);
};

// GET data lembaga berdasarkan id
const getLembagaByIdHandler = async (request, h) => {
  const lembaga = await lembagaModel.findById(request.params.id).exec();
  return h.response(lembaga);
};

// PUT data lembaga berdasarkan id
const editLembagaByIdHandler = async (request, h) => {
  const result = await lembagaModel.findByIdAndUpdate(request.params.id, request.payload, { new: true });
  return h.response(result);
};

// DELETE data lembaga berdasarkan id
const deleteLembagaByIdHandler = async (request, h) => {
  const result = await lembagaModel.findByIdAndDelete(request.params.id);
  return h.response(result);
};

const paymentHandler = async (request, h) => {
  try {
    const snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: 'SB-Mid-server-N7Of0iJ7TbvMBAYvorw7ZkGo',
      clientKey: 'SB-Mid-client-lGpWVxBMZHS4pBnj',
    });
    console.log('Server Key:', process.env.SECRET);
    console.log('Client Key:', process.env.NEXT_PUBLIC_CLIENT);

    const parameter = {
      transaction_details: {
        order_id: request.payload.order_id,
        gross_amount: request.payload.amount,
      },
      customer_details: {
        first_name: request.payload.firstName,
      },
    };

    const transaction = await snap.createTransaction(parameter);
    const dataPayment = {
      response: JSON.stringify(transaction),
    };

    const token = transaction.token;

    return h.response({ message: 'Success', dataPayment, token }).code(200);
  } catch (error) {
    return h.response({ message: error.message }).code(500);
  }
};

module.exports = {
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
};
