import { Router } from "express";
import { Storage } from "@google-cloud/storage";

const gStorageRouter = Router();

const storage = new Storage({
  keyFilename: "key.json",
});
const bucketName = "s3_bkt";

gStorageRouter.get("/", async (req, res) => {
  // Get info on all files in bucket
  let [filesArray] = await storage.bucket(bucketName).getFiles();

  res.send(
    (filesArray = filesArray.map((file) => {
      return file.metadata;
    }))
  );
});

gStorageRouter.get("/:filename", async (req, res) => {
  // Get info on a specific file in bucket
  const [file] = await storage
    .bucket(bucketName)
    .file(req.params.filename)
    .get();

  res.send(file.metadata.mediaLink);
});

export { gStorageRouter as Router };
