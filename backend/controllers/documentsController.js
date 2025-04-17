const { saveDocument, getDocuments } = require('../data/mockDB');

// Crear un documento simulado
exports.createDocument = (req, res) => {
  const { title, issuer, hash } = req.body;
  if (!title || !issuer || !hash) {
    return res.status(400).json({ error: 'Faltan campos requeridos.' });
  }

  const newDoc = {
    id: Date.now(),
    title,
    issuer,
    hash,
    status: 'emitido',
    createdAt: new Date()
  };

  saveDocument(newDoc);
  res.status(201).json(newDoc);
};

// Obtener todos los documentos
exports.getAllDocuments = (req, res) => {
  const docs = getDocuments();
  res.json(docs);
};
