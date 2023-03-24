const express = require('express')
const app = express()
const port = 3000

// Imports the Google Cloud client library
const { Storage } = require('@google-cloud/storage')

// Creates a client
const storage = new Storage({
  keyFilename: 'key.json'
})
const bucketName = 's3_bkt'

async function getBucketMetadata() {
  // Get Bucket Metadata
  const [metadata] = await storage.bucket(bucketName).getMetadata()

  return JSON.stringify(metadata, null, 2)
}

const helloWorld = async (req, res) => {
  let message = await getBucketMetadata()
  res.status(200).send(message)
}

exports.helloWorld = helloWorld

app.get('/', (req, res) => {
  helloWorld(req, res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// https://github.com/googleapis/nodejs-storage/blob/main/samples/bucketMetadata.js
/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
