const express = require('express');
const router = express.Router();
const interviewController = require('../controllers/interviewController');
const { verifyToken } = require('../middleware/authMiddleware');
const { isAdmin } = require('../middleware/roleMiddleware');

router.post('/interviews', verifyToken, interviewController.createInterview);
router.get('/interviews', verifyToken, interviewController.getInterviewsByApplicantId);

module.exports = router;
