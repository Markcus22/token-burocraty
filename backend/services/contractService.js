import { ethers } from "ethers";
import fs from "fs";
import path from "path";

// Leer dirección del contrato
const deployment = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "deployment/MaritimeDocumentNFT.json"))
);

// Leer ABI compilado desde Hardhat
const abi = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "artifacts/contracts/MaritimeDocumentNFT.sol/MaritimeDocumentNFT.json"))
).abi;

// Configurar provider y wallet local
const provider = new ethers.JsonRpcProvider("http://localhost:8545");

// ⚠️ Private key de la cuenta #0 del nodo Hardhat
const PRIVATE_KEY = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Instancia del contrato
const contract = new ethers.Contract(deployment.address, abi, wallet);

export default contract;
