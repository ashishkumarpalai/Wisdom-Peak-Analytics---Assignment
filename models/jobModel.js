const db = require('../config/db');

const Job = {
  create: (jobData, callback) => {
    const { title, department, description, open_date } = jobData;
    db.query(
      'INSERT INTO jobs (title, department, description, open_date) VALUES (?, ?, ?, ?)',
      [title, department, description, open_date],
      callback
    );
  },

  getAll: (callback) => {
    db.query('SELECT * FROM jobs', callback);
  }
};

module.exports = Job;
