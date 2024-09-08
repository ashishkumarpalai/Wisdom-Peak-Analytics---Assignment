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

app.use('/api/auth', authRoutes);
app.use('/api', jobRoutes);
app.use('/api', applicantRoutes);
app.use('/api', interviewRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
