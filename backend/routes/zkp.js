const express = require("express");
const router = express.Router();
const { generateAndVerifyZKP } = require("../services/zkpService");

// Lista de hashes permitidos (puedes conectarlo a una DB si quieres)
const validHashes = [123, 456, 789];

router.post("/verify", async (req, res) => {
  try {
    const { hash } = req.body;

    if (typeof hash !== "number") {
      return res.status(400).json({ error: "Se requiere un hash numérico" });
    }

    const input = {
      hash,
      validHashes
    };

    const verified = await generateAndVerifyZKP(input);

    res.json({
      verified,
      message: verified ? "✅ Hash verificado" : "❌ Hash no válido"
    });
  } catch (error) {
    console.error("ZKP verification error:", error.message);
    res.status(500).json({ error: "Error interno en verificación ZKP" });
  }
});

module.exports = router;
