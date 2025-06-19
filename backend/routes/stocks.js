import express from 'express';
import yahooFinance from 'yahoo-finance2';

const router = express.Router();

const symbols = ['ZIM', 'CMRE', 'MATX', 'SBLK'];

router.get('/', async (req, res) => {
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

router.get('/:symbol/history', async (req, res) => {
  const { symbol } = req.params;
  const interval = req.query.interval || '1d'; // podrás cambiar luego a '1wk', '1mo', etc.

  try {
    const result = await yahooFinance.historical(symbol, {
      period1: '2024-01-01',
      interval: interval, // usa el intervalo elegido
    });

    const candles = result.map(point => ({
      time: point.date.toISOString().split('T')[0], // formato YYYY-MM-DD
      open: point.open,
      high: point.high,
      low: point.low,
      close: point.close,
    }));

    res.json(candles);
  } catch (error) {
    console.error('Error fetching candlestick data:', error);
    res.status(500).json({ error: 'Error al obtener histórico en formato velas' });
  }
});

export default router;
