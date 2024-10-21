const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../models/user');
const register = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ "message": "All fields required" });
    }
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    user.save((err) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            const token = user.generateJwt();
            res
                .status(200)
                .json({ token });
        }
    })
};
const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Hardcoded user for testing
    const hardcodedUser = {
        email: 'test@example.com',
        password: 'password123', // Use the same hash generation method for real checks
        name: 'Test User',
    };

    // Check against hardcoded user
    if (email === hardcodedUser.email && password === hardcodedUser.password) {
        // If hardcoded user matches
        const token = hardcodedUser.generateJwt(); // Generate JWT token
        return res.status(200).json({ message: 'Login successful', token, user: hardcodedUser });
    }

    // Existing user lookup (optional)
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'No user found.' });
        }

        if (!user.validPassword(password)) {
            return res.status(401).json({ message: 'Oops! Wrong password.' });
        }

        // Assign user to req.user
        req.user = user;

        // Respond with success and user data (omit sensitive data)
        return res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
        console.error('Login error:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
module.exports = {
    register,
    login
};