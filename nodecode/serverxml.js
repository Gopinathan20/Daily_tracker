const express = require('express');
const fs = require('fs');
const xml2js = require('xml2js');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  fs.readFile('sample.xml', (err, data) => {
    if (err) {
      res.status(500).send('Error reading XML file');
      return;
    }

    xml2js.parseString(data, (parseErr, result) => {
      if (parseErr) {
        res.status(500).send('Error parsing XML');
        return;
      }

      res.send(result);
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
