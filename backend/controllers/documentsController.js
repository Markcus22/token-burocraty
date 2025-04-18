const contract = require("../services/contractService");

exports.mintDocument = async (req, res) => {
  try {
    const { to, tokenURI } = req.body;

    // Validación básica
    if (!to || !tokenURI) {
      return res.status(400).json({ error: "Se requiere 'to' y 'tokenURI'" });
    }

    // Ejecutar la función del contrato
    const tx = await contract.mintDocument(to, tokenURI);
    const receipt = await tx.wait();

    const tokenId = receipt.events[0].args.tokenId.toString();

    res.status(201).json({
      message: "✅ Documento NFT emitido con éxito",
      tokenId,
      transactionHash: tx.hash,
    });
  } catch (err) {
    console.error("❌ Error al emitir documento:", err);
    res.status(500).json({ error: "Error al emitir documento" });
  }
};
