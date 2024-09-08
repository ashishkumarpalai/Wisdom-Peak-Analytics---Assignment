const express = require('express');
const router = express.Router();
const applicantController = require('../controllers/applicantController');
const { verifyToken } = require('../middleware/authMiddleware');
const { isAdmin } = require('../middleware/roleMiddleware');

router.post('/applicants', verifyToken, applicantController.createApplicant);
router.get('/applicants', verifyToken, applicantController.getApplicantsByJobId);
router.patch('/applicants/:applicantId', verifyToken, applicantController.updateApplicantStatus);
router.delete('/applicants/:applicantId', verifyToken, applicantController.deleteApplicant);

module.exports = router;
