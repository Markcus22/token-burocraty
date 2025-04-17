const documents = [];

function saveDocument(doc) {
  documents.push(doc);
}

function getDocuments() {
  return documents;
}

module.exports = {
  saveDocument,
  getDocuments
};
