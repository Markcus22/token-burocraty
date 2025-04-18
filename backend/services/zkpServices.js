const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ZKP_DIR = path.join(__dirname, "../../zkp");

async function generateAndVerifyZKP(input) {
  const inputPath = path.join(ZKP_DIR, "input.json");
  const witnessPath = path.join(ZKP_DIR, "witness.wtns");
  const proofPath = path.join(ZKP_DIR, "proof.json");
  const publicPath = path.join(ZKP_DIR, "public.json");

  // Guardar el input
  fs.writeFileSync(inputPath, JSON.stringify(input, null, 2));

  // 1. Generar el testigo
  execSync(`node ${ZKP_DIR}/authorized_js/generate_witness.js ${ZKP_DIR}/authorized_js/authorized.wasm ${inputPath} ${witnessPath}`);

  // 2. Generar la prueba
  execSync(`snarkjs groth16 prove ${ZKP_DIR}/authorized_final.zkey ${witnessPath} ${proofPath} ${publicPath}`);

  // 3. Verificar la prueba
  const result = execSync(`snarkjs groth16 verify ${ZKP_DIR}/verification_key.json ${publicPath} ${proofPath}`);

  return result.toString().includes("OK");
}

module.exports = { generateAndVerifyZKP };
