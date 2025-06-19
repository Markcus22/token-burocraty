import axios from "axios";
import FormData from "form-data";
import fs from "fs";

const PINATA_URL = "https://api.pinata.cloud/pinning/pinFileToIPFS";
const PINATA_JWT = process.env.PINATA_JWT;

export async function uploadFileToPinata(filePath) {
  const data = new FormData();
  data.append("file", fs.createReadStream(filePath));

  const res = await axios.post(PINATA_URL, data, {
    maxBodyLength: "Infinity",
    headers: {
      ...data.getHeaders(),
      Authorization: `Bearer ${PINATA_JWT}`,
    },
  });

  return res.data.IpfsHash;
}
