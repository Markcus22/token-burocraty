const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const PINATA_URL = "https://api.pinata.cloud/pinning/pinFileToIPFS";
const PINATA_JWT = process.env.PINATA_JWT;

async function uploadFileToPinata(filePath) {
  const data = new FormData();
  data.append("file", fs.createReadStream(filePath));

  const res = await axios.post(PINATA_URL, data, {
    maxBodyLength: "Infinity",
    headers: {
      "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      Authorization: `Bearer ${PINATA_JWT}`,
    },
  });

  return res.data.IpfsHash;
}

module.exports = { uploadFileToPinata };
