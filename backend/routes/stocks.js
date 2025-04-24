import express from 'express';
import yahooFinance from 'yahoo-finance2';

const router = express.Router();

const symbols = ['ZIM', 'SFL', 'CMRE', 'DAC', 'GSL']; // Puedes añadir más

router.get('/', async (req, res) => {
  try {
    const results = await Promise.all(
      symbols.map(async (symbol) => {
        const quote = await yahooFinance.quote(symbol);
        return {
          symbol,
          price: quote.regularMarketPrice,
          change: quote.regularMarketChangePercent.toFixed(2) + '%',
        };
      })
    );
    res.json(results);
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).json({ error: 'Error al obtener datos de Yahoo Finance' });
  }
});

export default router;
// Este archivo define una ruta para obtener datos de acciones de empresas navieras utilizando la API de Yahoo Finance.