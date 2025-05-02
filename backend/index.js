import express from 'express';
import cors from 'cors';
import yahooFinance from 'yahoo-finance2';
import stocksRouter from './routes/stocks.js'; // usa import, no require

const app = express();

// Middleware
app.use(cors({
  origin: 'http://127.0.0.1:5173', // Ajusta según el frontend
  credentials: true
}));

app.use(express.json());

// Rutas modulares
app.use("/api/stocks", stocksRouter);

// Fallback route
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Error general:", err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});

// Inicialización del servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Backend corriendo en http://localhost:${PORT}`);
});
