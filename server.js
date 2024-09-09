// const express = require('express');
// const dotenv = require('dotenv');
// const authRoutes = require('./routes/authRoutes');
// const jobRoutes = require('./routes/jobRoutes');
// const bodyParser = require('body-parser');

// dotenv.config();

// const app = express();
// app.use(bodyParser.json());

// app.use('/api/auth', authRoutes);
// app.use('/api', jobRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');
const applicantRoutes = require('./routes/applicantRoutes');
const interviewRoutes = require('./routes/interviewRoutes');

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Geeksynergy Backend</title>
          <style>
              body {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
                  margin: 0;
                  font-family: Arial, sans-serif;
                  background-color: #282c34;
                  color: #61dafb;
              }
              h1 {
                  font-size: 3rem;
                  text-align: center;
              }
          </style>
      </head>
      <body>
          <h1>Welcome to WISDOM-PEAK-ANALYTICS Backend</h1>
      </body>
      </html>
  `);
  console.log("WISDOM-PEAK-ANALYTICS Backend");
});


app.use('/api/auth', authRoutes);
app.use('/api', jobRoutes);
app.use('/api', applicantRoutes);
app.use('/api', interviewRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
