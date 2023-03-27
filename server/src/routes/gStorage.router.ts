import { Router } from "express";
import { Storage } from "@google-cloud/storage";

const gStorageRouter = Router();

const storage = new Storage({
  keyFilename: "key.json",
});
const bucketName = "s3_bkt";

gStorageRouter.get("/", async (req, res) => {
  // Get info on all files in bucket
  const [fileData] = await storage.bucket(bucketName).getFiles();

  console.log(`fileData: ${JSON.stringify(fileData, null, 2)}`);

  res.header("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(fileData, null, 2));
});

export { gStorageRouter as Router };
