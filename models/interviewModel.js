const db = require('../config/db');

const Interview = {
  create: (interviewData, callback) => {
    const { applicantId, interviewDate, interviewerName } = interviewData;
    db.query(
      'INSERT INTO interviews (applicant_id, interview_date, interviewer_name) VALUES (?, ?, ?)',
      [applicantId, interviewDate, interviewerName],
      callback
    );
  },

//   getByApplicantId: (applicantId, callback) => {
//     db.query('SELECT * FROM interviews WHERE applicant_id = ?', [applicantId], callback);
//   }

getByApplicantId: (applicantId, callback) => {
    const query = `
      SELECT 
        i.id AS interview_id, 
        i.interview_date, 
        i.interviewer_name, 
        a.name AS applicant_name, 
        a.email AS applicant_email, 
        a.resume_link AS applicant_resume_link, 
        a.status AS applicant_status, 
        j.title AS job_title, 
        j.department AS job_department, 
        j.description AS job_description, 
        j.open_date AS job_open_date
      FROM interviews i
      JOIN applicants a ON i.applicant_id = a.id
      JOIN jobs j ON a.job_id = j.id
      WHERE i.applicant_id = ?`;

    db.query(query, [applicantId], callback);
  }
};

module.exports = Interview;
