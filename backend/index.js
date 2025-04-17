const express = require('express');
const app = express();
const port = 3001;

const documentRoutes = require('./routes/documents');

app.use(express.json());
app.use('/api/documents', documentRoutes);

app.get('/', (req, res) => {
  res.send('API para documentos navieros.');
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
