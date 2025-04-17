async function main() {
    const [deployer] = await ethers.getSigners();
    const Contract = await ethers.getContractFactory("MaritimeDocumentNFT");
    const contract = await Contract.deploy();
    await contract.deployed();
  
    console.log("Contrato desplegado en:", contract.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  