import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import stocksRouter from './routes/stocks.js';
import documentsRouter from './routes/documents.js';

dotenv.config();

const app = express();

// Middleware CORS para todos los orígenes de desarrollo posibles
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:5174',
    'http://127.0.0.1:5174'
  ],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// Rutas
app.use("/api/stocks", stocksRouter);
app.use("/api/documents", documentsRouter);

// Ruta fallback
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Manejador de errores
app.use((err, req, res, next) => {
  console.error("Error general:", err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});

// Iniciar servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Backend corriendo en http://localhost:${PORT}`);
});
