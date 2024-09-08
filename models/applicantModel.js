const db = require('../config/db');

const Applicant = {
    create: (applicantData, callback) => {
        const { jobId, name, email, resumeLink, status } = applicantData;
        db.query(
            'INSERT INTO applicants (job_id, name, email, resume_link, status) VALUES (?, ?, ?, ?, ?)',
            [jobId, name, email, resumeLink, status],
            callback
        );
    },

    //   getByJobId: (jobId, callback) => {
    //     db.query('SELECT * FROM applicants WHERE job_id = ?', [jobId], callback);
    //   },

    //  getByJobId: (jobId, callback) => {
    //     db.query(
    //       `SELECT a.id AS applicantId, a.name, a.email, a.resume_link AS resumeLink, a.status, 
    //               j.title AS jobTitle, j.department AS jobDepartment, j.description AS jobDescription, j.open_date AS jobOpenDate
    //        FROM applicants a
    //        JOIN jobs j ON a.job_id = j.id
    //        WHERE a.job_id = ?`,
    //       [jobId],
    //       callback
    //     );
    //   },

    getByJobId: (jobId, callback) => {
        db.query(`
      SELECT a.id AS applicant_id, a.name AS applicant_name, a.email AS applicant_email, a.resume_link, a.status AS applicant_status,
             j.id AS job_id, j.title AS job_title, j.department, j.description, j.open_date
      FROM applicants a
      JOIN jobs j ON a.job_id = j.id
      WHERE a.job_id = ?
    `, [jobId], callback);
    },
    // updateStatus: (applicantId, status, callback) => {
    //     db.query('UPDATE applicants SET status = ? WHERE id = ?', [status, applicantId], callback);
    // },
    updateStatus: (applicantId, status, callback) => {
        // First, check if the applicant exists
        db.query('SELECT id FROM applicants WHERE id = ?', [applicantId], (err, results) => {
            if (err) return callback(err);

            // If no applicant is found with the given ID, return an error
            if (results.length === 0) {
                return callback(new Error('Applicant ID does not exist.'));
            }

            // If the applicant exists, proceed with updating the status
            db.query('UPDATE applicants SET status = ? WHERE id = ?', [status, applicantId], callback);
        });
    },
    // delete: (applicantId, callback) => {
    //     db.query('DELETE FROM applicants WHERE id = ?', [applicantId], callback);
    // }

    // Check if the applicant exists before deleting
    delete: (applicantId, callback) => {
        // First check if the applicant exists
        db.query('SELECT id FROM applicants WHERE id = ?', [applicantId], (err, results) => {
            if (err) return callback(err);

            // If no applicant is found, return an error
            if (results.length === 0) {
                return callback(new Error('Applicant ID does not exist.'));
            }

            // Proceed to delete if the applicant exists
            db.query('DELETE FROM applicants WHERE id = ?', [applicantId], (deleteErr, deleteResult) => {
                if (deleteErr) {
                    // Provide the exact error from the database
                    return callback(deleteErr);
                }
                callback(null, deleteResult);
            });
        });
    }
};

module.exports = Applicant;
