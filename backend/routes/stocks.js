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
