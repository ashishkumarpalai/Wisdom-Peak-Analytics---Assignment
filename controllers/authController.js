const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// exports.register = (req, res) => {
//   const { name, email, password, role } = req.body;
//   const hashedPassword = bcrypt.hashSync(password, 8);

//   User.create({ name, email, password: hashedPassword, role }, (err, result) => {
//     if (err) return res.status(500).send('Error registering user.');
//     res.status(201).send('User registered successfully!');
//   });
// };

exports.register = (req, res) => {
    const { name, email, password, role } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    // Set role to 'user' if it is not provided
    const userRole = role || 'user';

    User.create({ name, email, password: hashedPassword, role: userRole }, (err, result) => {
        if (err) return res.status(500).send('Error registering user.check email');
        res.status(201).send('User registered successfully!');
    });
};


exports.login = (req, res) => {
    const { email, password } = req.body;

    User.findByEmail(email, (err, results) => {
        if (err || results.length === 0) return res.status(404).send('User not found.');
        const user = results[0];

        const isValidPassword = bcrypt.compareSync(password, user.password);
        if (!isValidPassword) return res.status(401).send('Invalid credentials.');

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: 86400
        });

        res.status(200).send({ auth: true, token });
    });
};
