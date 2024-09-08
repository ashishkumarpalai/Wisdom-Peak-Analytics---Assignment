exports.isAdmin = (req, res, next) => {
    if (req.userRole !== 'admin') return res.status(403).send('Admin access required.');
    next();
  };
  