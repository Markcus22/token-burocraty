const express = require('express');
const router = express.Router();
const {
  createDocument,
  getAllDocuments
} = require('../controllers/documentsController');

router.post('/', createDocument);
router.get('/', getAllDocuments);

module.exports = router;
