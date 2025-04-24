import express from 'express';
import cors from 'cors';
import yahooFinance from 'yahoo-finance2';

const app = express();

app.use(cors({
  origin: 'http://127.0.0.1:5173', // Asegúrate de usar el correcto puerto del frontend
  credentials: true
}));

app.use(express.json());

// Ruta para obtener precios actuales
app.get('/api/stocks', async (req, res) => {
  const symbols = ['ZIM', 'CMRE', 'MATX', 'SBLK'];

  try {
    const results = await Promise.all(
      symbols.map(async symbol => {
        const quote = await yahooFinance.quote(symbol);
        return {
          symbol,
          price: quote.regularMarketPrice,
          change: quote.regularMarketChangePercent,
          open: quote.regularMarketOpen,
          high: quote.regularMarketDayHigh,
          low: quote.regularMarketDayLow,
          volume: quote.regularMarketVolume
        };
      })
    );
    res.json(results);
  } catch (error) {
    console.error('Error al obtener datos:', error);
    res.status(500).json({ error: 'Error al obtener datos de acciones' });
  }
});

// Ruta para obtener histórico
app.get('/api/stocks/:symbol/history', async (req, res) => {
  const { symbol } = req.params;

  try {
    const result = await yahooFinance.historical(symbol, {
      period1: '2024-01-01',
      interval: '1d'
    });

    const data = result.map(point => ({
      date: point.date,
      close: point.close
    }));

    res.json(data);
  } catch (error) {
    console.error('Error fetching stock history:', error);
    res.status(500).json({ error: 'Error al obtener histórico' });
  }
});

app.listen(3001, () => {
  console.log('Servidor escuchando en http://localhost:3001');
});
