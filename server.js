const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;

app.get('/api/stocks', async (req, res) => {
  try {
    const symbols = ['HLAGF', 'ZIM', 'CMRE']; // Agrega los símbolos de las navieras que desees
    const promises = symbols.map(symbol =>
      axios.get(`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`)
    );
    const responses = await Promise.all(promises);
    const data = responses.map(response => {
      const quote = response.data.quoteResponse.result[0];
      return {
        symbol: quote.symbol,
        name: quote.longName || quote.shortName,
        price: quote.regularMarketPrice,
        change: quote.regularMarketChangePercent,
      };
    });
    res.json(data);
  } catch (error) {
    console.error('Error al obtener datos de acciones:', error);
    res.status(500).json({ error: 'Error al obtener datos de acciones' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
