

# 🚢 Token Burocraty

*Token Burocraty* es una plataforma descentralizada que transforma la gestión documental en el sector marítimo mediante la *tokenización con NFTs* y la validación de documentos usando **Zero-Knowledge Proofs (ZKP)**. Su objetivo es digitalizar y automatizar los procesos burocráticos, mejorando la transparencia, seguridad y eficiencia entre actores del ecosistema logístico-portuario.

---

## 📌 Características principales

* 🔐 **Tokenización documental**: emisión de documentos navieros como tokens ERC-721 únicos (NFTs).
* 🧠 **Zero-Knowledge Proofs (ZKP)**: validación sin necesidad de revelar el contenido del documento.
* 🔗 **Backend con Express + Ethers.js**: API REST para interactuar con la blockchain.
* 🌐 **Frontend moderno (React + TailwindCSS)**: interfaz rápida, intuitiva y responsiva.
* 📈 **Integración con Yahoo Finance**: visualización en tiempo real de acciones de navieras (ZIM, MATX, CMRE, SBLK).
* 🧱 **Estructura modular**: separación clara entre smart contracts, backend, frontend y lógica ZKP.

---

## 📂 Estructura del proyecto

```
token-burocraty/
├── backend/               # Servidor Express con lógica blockchain y ZKP
├── contracts/             # Contratos inteligentes en Solidity (ERC-721)
├── frontend/              # Interfaz React + Vite + Tailwind + Recharts
├── circuits/              # Circuitos Circom y pruebas ZKP con SnarkJS
├── docs/                  # Documentación técnica, flujos e ideas futuras
└── README.md              # Este archivo
```

---

## 🚀 Instalación y ejecución

### 🔧 Requisitos previos

* Node.js v18+
* npm o yarn
* Docker (opcional para IPFS)
* Acceso a una red blockchain (por ejemplo, Goerli/Testnet)

### ▶️ Pasos

1. Clonar el repositorio:

```
git clone https://github.com/Markcus22/token-burocraty.git
cd token-burocraty
```

2. Backend:

```
cd backend
npm install
npm run dev
```

3. Frontend:

```
cd frontend
npm install
npm run dev
```

> Asegúrate de configurar correctamente los archivos `.env` tanto en `backend/` como `frontend/` con claves de Infura, APIs financieras y claves privadas.

---

## 🛠 Tecnologías usadas

* **Solidity** – contratos inteligentes ERC-721
* **React + Vite** – frontend moderno
* **Express + Ethers.js** – backend blockchain
* **TailwindCSS** – diseño rápido y responsivo
* **Circom + SnarkJS** – generación y verificación de pruebas ZKP
* **Yahoo Finance API** – datos de acciones en tiempo real

---

## 📈 Roadmap

* [x] Emisión de documentos como NFTs
* [x] Revocación y validación básica de documentos
* [x] Integración de precios de acciones navieras
* [x] Implementación funcional de ZKP
* [ ] Vinculación de documentos a IPFS
* [ ] Dashboard para usuarios portuarios y reguladores
* [ ] Firma digital interoperable entre puertos
* [ ] Automatización del flujo documental entre navieras y puertos

---

## 🧪 Ejemplo de uso

1. Un agente naviero carga un documento → el backend lo tokeniza como NFT.
2. Se genera una prueba ZKP → el receptor puede verificarlo **sin ver el contenido**.
3. Las autoridades portuarias confirman la validez y trazabilidad de la documentación.

---

## 🤝 Contribuciones

¿Te interesa el futuro de la trazabilidad documental o la blockchain aplicada a logística?

¡Las contribuciones son bienvenidas!
Abre un issue o envía un pull request.

---

## 📜 Licencia

Este proyecto está bajo la licencia MIT.

---

## 📬 Contacto

**Marc**
🔗 [LinkedIn](https://linkedin.com/in/tu-usuario)
🐙 [GitHub](https://github.com/Markcus22)

---

> Proyecto desarrollado como iniciativa personal para explorar la aplicación de blockchain y criptografía avanzada (ZKP) en entornos reales del sector marítimo y logístico.


