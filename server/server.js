import express from 'express';
import multer from 'multer';
import cv from 'opencv4nodejs';
import path from 'path';

const app = express();
const upload = multer();

// Serve the HTML file with the image upload form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle the image upload and conversion
app.post('/upload', upload.single('image'), (req, res) => {
  // Read the uploaded image
  const img = cv.imdecode(req.file.buffer);

  // Convert the image to grayscale
  const grayImg = img.cvtColor(cv.COLOR_BGR2GRAY);

  // Threshold the grayscale image to get a black and white image
  const thresholdImg = grayImg.threshold(127, 255, cv.THRESH_BINARY);

  // Encode the black and white image to a buffer
  const buffer = cv.imencode('.jpg', thresholdImg).toString('base64');

  // Return the black and white image as a response
  res.send(`<img src="data:image/jpeg;base64,${buffer}" />`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
