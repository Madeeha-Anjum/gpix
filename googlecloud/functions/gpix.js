const functions = require("@google-cloud/functions-framework");

// Imports the Google Cloud client library
const { Storage } = require("@google-cloud/storage");

// Creates a client from a Google service account key
const storage = new Storage({ keyFilename: "key.json" });

// The ID of GCS bucket
const bucketName = "s3_bkt";

const getAllFiles = async () => {
  // Get info on all files in bucket
  const [filesArray] = await storage.bucket(bucketName).getFiles();
  return filesArray.map((file) => {
    return file.metadata;
  });
};

const getFile = async (filename) => {
  // Get info on a specific file in bucket
  const [file] = await storage.bucket(bucketName).file(filename).get();

  return {
    id: file.metadata.id,
    metadata: file.metadata.metadata,
    link: {
      mediaLink: file.metadata.mediaLink,
      selfLink: file.metadata.selfLink,
    },
  };
};

functions.http("gpix", (req, res) => {
  if (req.method === "GET") {
    getAllFiles().then((files) => {
      res.send(files);
    });
  } else if (req.method === "POST") {
    const { filename } = req.body;
    if (!filename) {
      res.status(400).send("Bad Request: filename is missing");
    } else {
      getFile(req.body.filename).then((file) => {
        res.send(file);
      });
    }
  }
});
