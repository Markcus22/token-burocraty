const fs = require("fs");
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Desplegando contrato con la cuenta:", deployer.address);

  const Contract = await hre.ethers.getContractFactory("MaritimeDocumentNFT");
  const contract = await Contract.deploy(deployer.address); // ¡Aquí está el fix!
  await contract.deployed();

  console.log("✅ Contrato desplegado en:", contract.address);

  const deploymentInfo = {
    address: contract.address,
    network: "localhost",
    deployedAt: new Date().toISOString(),
  };

  fs.mkdirSync("deployment", { recursive: true });
  fs.writeFileSync("deployment/MaritimeDocumentNFT.json", JSON.stringify(deploymentInfo, null, 2));
  console.log("📝 Dirección guardada en deployment/MaritimeDocumentNFT.json");
}

main().catch((error) => {
  console.error("❌ Error al desplegar:", error);
  process.exitCode = 1;
});
