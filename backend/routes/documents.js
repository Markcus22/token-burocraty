const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const upload = multer({ dest: "uploads/" });
const contract = require("../services/contractService");
const { uploadFileToPinata } = require("../services/pinataService");

// POST /api/documents/upload-and-mint
router.post("/upload-and-mint", upload.single("document"), async (req, res) => {
  try {
    const { to } = req.body;
    const file = req.file;

    if (!file || !to) {
      return res.status(400).json({ error: "Falta archivo o dirección 'to'" });
    }

    const ipfsHash = await uploadFileToPinata(file.path);
    const tokenURI = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;

    const tx = await contract.mintDocument(to, tokenURI);
    const receipt = await tx.wait();

    res.json({
      message: "✅ Documento subido y NFT emitido",
      ipfsHash,
      tokenURI,
      transactionHash: tx.hash,
      tokenId: receipt.events[0].args.tokenId.toString(),
    });
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: "Error al subir y emitir NFT" });
  }
});
// GET /api/documents/:tokenId
router.get("/:tokenId", async (req, res) => {
  try {
    const tokenId = req.params.tokenId;

    const owner = await contract.ownerOf(tokenId);
    const tokenURI = await contract.tokenURI(tokenId);

    res.json({
      tokenId,
      owner,
      tokenURI
    });
  } catch (err) {
    console.error("❌ Error al consultar NFT:", err);
    res.status(404).json({ error: "NFT no encontrado o token inválido" });
  }
});
// Obtener todos los NFTs emitidos
router.get("/", async (req, res) => {
  try {
    const count = await contract.docCount();
    const nfts = [];

    for (let i = 1; i <= count; i++) {
      const [owner, tokenURI] = await Promise.all([
        contract.ownerOf(i),
        contract.tokenURI(i),
      ]);

      nfts.push({
        tokenId: i,
        owner,
        tokenURI,
      });
    }

    res.json({ total: count.toString(), nfts });
  } catch (err) {
    console.error("❌ Error al listar NFTs:", err.message);
    res.status(500).json({ error: "No se pudo listar los NFTs" });
  }
});
// DELETE /api/documents/:tokenId - Revocar un NFT
router.delete("/:tokenId", async (req, res) => {
  try {
    const tokenId = req.params.tokenId;

    const tx = await contract.burnDocument(tokenId);
    const receipt = await tx.wait();

    res.json({
      message: `🗑️ Documento revocado con tokenId ${tokenId}`,
      transactionHash: tx.hash
    });
  } catch (err) {
    console.error("❌ Error al revocar NFT:", err.message);
    res.status(500).json({ error: "Error al revocar documento" });
  }
});
module.exports = router;
