const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')

dotenv.config();

const secretKey = process.env.JWT_SECRET;

exports.authenticateUser = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decodedToken = jwt.verify(token, secretKey);
        req.userId = decodedToken.userId;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};
