const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const { verifyToken } = require('../middleware/authMiddleware');
const { isAdmin } = require('../middleware/roleMiddleware');

router.post('/jobs', verifyToken, isAdmin, jobController.createJob);
router.get('/jobs', verifyToken, jobController.getAllJobs);

module.exports = router;
