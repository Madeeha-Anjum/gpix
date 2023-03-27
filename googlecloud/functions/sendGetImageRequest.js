/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

// Imports the Google Cloud client library
const { Storage } = require("@google-cloud/storage");

// Creates a client
const storage = new Storage({
  keyFilename: "key.json",
});
const bucketName = "s3_bkt";

async function getBucketMetadata() {
  return "success";
}

exports.helloWorld = (req, res) => {
  let response = getBucketMetadata();

  res.status(200).send({ data: { ...response } });
};
