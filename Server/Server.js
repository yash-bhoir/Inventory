// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Use any port you prefer

app.use(bodyParser.json());

app.post('/api/CurdOperations/ItemListOperations', (req, res) => {
  // Handle posted data here
  const { flag, unit, itemID, image, brand, manufacturer, sellingPrice, costPrice, description, preferredVendor } = req.body;
  // Process the data, save to database, etc.
  console.log('Received data:', { flag, unit, itemID, image, brand, manufacturer, sellingPrice, costPrice, description, preferredVendor });
  res.json({ success: true }); // Send success response
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
          