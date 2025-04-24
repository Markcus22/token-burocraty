import express from 'express';
import cors from 'cors';
import yahooFinance from 'yahoo-finance2';

const app = express();
app.use(cors({
  origin: 'http://127.0.0.1:5173', // o cambia al que uses
  credentials: true
}));
app.use(express.json());

const symbols = ['ZIM', 'CMRE', 'MATX', 'SBLK'];

app.get('/api/stocks', async (req, res) => {
  try {
    const data = await Promise.all(symbols.map(async (symbol) => {
      const quote = await yahooFinance.quote(symbol);
      const history = await yahooFinance.historical(symbol, { period1: '7d', interval: '1d' });

      return {
        symbol,
        price: quote.regularMarketPrice,
        changePercent: quote.regularMarketChangePercent.toFixed(2),
        open: quote.regularMarketOpen,
        high: quote.regularMarketDayHigh,
        low: quote.regularMarketDayLow,
        volume: quote.regularMarketVolume,
        history: history.map(day => ({
          date: new Date(day.date).toLocaleDateString(),
          close: day.close
        }))
      };
    }));

    res.json(data);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

app.listen(3001, () => {
  console.log('Servidor escuchando en http://localhost:3001');
});
