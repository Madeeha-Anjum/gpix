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
  console.log(file.metadata);
  res.send({
    id: file.metadata.id,
    metadata: file.metadata.metadata,
    link: {
      mediaLink: file.metadata.mediaLink,
      selfLink: file.metadata.selfLink,
    },
  });
});

export { gStorageRouter as Router };
