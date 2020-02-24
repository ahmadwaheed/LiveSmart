var http = require("https");
const express = require('express')
const app = express();

//const vision = require('@google-cloud/vision');
const port = 3000;

// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient({
  keyFilename: 'APIKey.json'
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

async function quickstart() {

  // Performs label detection on the image file
  const [result] = await client.labelDetection('./resources/eats.jpeg');
  const labels = result.labelAnnotations;
  console.log('Labels:');
  //console.log(labels);

  labels.forEach(label => console.log(label.description));

  let foodNames = [];
  labels.forEach(item => foodNames.push(item.description));
  // var now = labels.filter(label => label.description);


//  console.log(now.description);
 app.get('/', (req, res) => res.send(foodNames));
  //console.log(label.description);
}

// [END vision_quickstart]

quickstart().catch(console.error);

//We need to store the response in the table and
//user needs to determine the word/term that makes sense along with the
