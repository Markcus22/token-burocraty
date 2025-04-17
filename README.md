# token-burocraty
 🚢 Token Burocraty – Tokenización de la Burocracia Naviera

Este proyecto tiene como objetivo digitalizar y descentralizar la gestión documental del sector naviero mediante **blockchain**, **NFTs** y **Zero-Knowledge Proofs (ZKP)**.

---

## 📌 Objetivo

Tokenizar documentos burocráticos del ámbito marítimo (como permisos, certificados, manifiestos de carga, etc.) para:
- Reducir la fricción burocrática.
- Garantizar trazabilidad y transparencia.
- Proteger datos sensibles con pruebas ZK.
- Facilitar auditorías y verificaciones.

---

## 🧱 Arquitectura

```
Frontend (Next.js)
  ↕
Backend API (Express.js)
  ↕
Smart Contracts (Solidity - NFT ERC721)
  ↕
Blockchain (Polygon zkEVM, zkSync Era u otro)
```

- Almacenamiento descentralizado de documentos: IPFS / Arweave.
- Validación privada de permisos: ZKP (zk-SNARKs).
- Identificación digital: DID + Verifiable Credentials.

---

## 🛠️ Cómo ejecutar localmente

### Requisitos

- Node.js
- Metamask o billetera Web3
- Ganache / Hardhat / testnet para pruebas

### 1. Clona el repositorio

```bash
git clone https://github.com/Markcus22/token-burocraty.git
cd token-burocraty
```

### 2. Ejecutar el Backend

```bash
cd backend
npm install
npm start
```

### 3. Ejecutar el Frontend

```bash
cd ../frontend
npm install
npm run dev
```

### 4. Contrato inteligente

El contrato `MaritimeDocumentNFT.sol` está en la carpeta `/contracts`. Puedes desplegarlo con Hardhat o Remix.

---

## 🔐 Próximos pasos

- [ ] Integración con IPFS para documentos reales
- [ ] Validación de documentos con Zero-Knowledge Proofs
- [ ] Implementar Identidad Digital (Polygon ID / W3C DID)
- [ ] Panel administrativo para emisores de documentos
- [ ] Dashboard de documentos con filtros y estados

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Abre un issue o haz un pull request.

---

## 📄 Licencia

MIT
