import { Storage } from "@google-cloud/storage"

const storage = new Storage({
  projectId: 'capstone-acnetify',
  keyFilename: 'keyfile.json'
});

// Memilih bucket yang akan digunakan
export const bucket = storage.bucket('image-capstone-acnetify');


