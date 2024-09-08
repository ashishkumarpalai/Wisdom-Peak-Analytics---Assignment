const Applicant = require('../models/applicantModel');

exports.createApplicant = (req, res) => {
    Applicant.create(req.body, (err, result) => {
        if (err) return res.status(500).send('Error creating applicant.');
        res.status(201).send('Applicant created successfully!');
    });
};

exports.getApplicantsByJobId = (req, res) => {
    const { jobId } = req.query;
    Applicant.getByJobId(jobId, (err, results) => {
        if (err) return res.status(500).send('Error retrieving applicants.');
        res.status(200).json(results);
    });
};

// exports.updateApplicantStatus = (req, res) => {
//     const { applicantId } = req.params;
//     const { status } = req.body;
//     Applicant.updateStatus(applicantId, status, (err, result) => {
//         if (err) return res.status(500).send('Error updating applicant status.');
//         res.status(200).send('Applicant status updated successfully!');
//     });
// };

exports.updateApplicantStatus = (req, res) => {
    const { applicantId } = req.params;
    const { status } = req.body;

    // Ensure a valid status is provided (optional)
    if (!status) {
        return res.status(400).send('Status is required.');
    }

    Applicant.updateStatus(applicantId, status, (err, result) => {
        if (err) {
            // If the error message is about the applicant not existing, send a 404 status
            if (err.message === 'Applicant ID does not exist.') {
                return res.status(404).send(err.message);
            }
            // For other errors, send a 500 status
            return res.status(500).send('Error updating applicant status.');
        }

        // If the update was successful but no rows were affected, it means the applicant was not found
        if (result.affectedRows === 0) {
            return res.status(404).send('Applicant ID does not exist.');
        }

        res.status(200).send('Applicant status updated successfully!');
    });
};


// exports.deleteApplicant = (req, res) => {
//     const { applicantId } = req.params;
//     Applicant.delete(applicantId, (err, result) => {
//         if (err) return res.status(500).send('Error deleting applicant.');
//         res.status(200).send('Applicant deleted successfully!');
//     });
// };
exports.deleteApplicant = (req, res) => {
    const { applicantId } = req.params;
    Applicant.delete(applicantId, (err, result) => {
        if (err) {
            // Log the exact error for debugging purposes
            console.error('Error occurred while deleting applicant:', err);

            // Handle the case where the applicant ID does not exist
            if (err.message === 'Applicant ID does not exist.') {
                return res.status(404).send(err.message);
            }

            // Generic error message for other issues
            return res.status(500).send('Error deleting applicant.');
        }

        // If deletion is successful
        res.status(200).send('Applicant deleted successfully!');
    });
};