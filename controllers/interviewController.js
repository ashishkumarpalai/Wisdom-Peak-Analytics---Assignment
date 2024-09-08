const Interview = require('../models/interviewModel');

exports.createInterview = (req, res) => {
  Interview.create(req.body, (err, result) => {
    if (err) return res.status(500).send('Error scheduling interview.');
    res.status(201).send('Interview scheduled successfully!');
  });
};

exports.getInterviewsByApplicantId = (req, res) => {
  const { applicantId } = req.query;
  Interview.getByApplicantId(applicantId, (err, results) => {
    if (err) return res.status(500).send('Error retrieving interviews.');
    res.status(200).json(results);
  });
};
