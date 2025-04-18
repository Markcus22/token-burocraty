import express from 'express';
import cors from 'cors';

const app = express();

// Habilita CORS para el frontend (puerto 5174 de Vite)
app.use(cors({
  origin: 'http://127.0.0.1:5174',
  credentials: true
}));

app.use(express.json());

// ... tus rutas aquí

app.listen(3001, () => {
  console.log('Servidor escuchando en http://localhost:3001');
});
