const Job = require('../models/jobModel');

exports.createJob = (req, res) => {
  Job.create(req.body, (err, result) => {
    if (err) return res.status(500).send('Error creating job.');
    res.status(201).send('Job created successfully!');
  });
};

exports.getAllJobs = (req, res) => {
  Job.getAll((err, results) => {
    if (err) return res.status(500).send('Error retrieving jobs.');
    res.status(200).json(results);
  });
};
