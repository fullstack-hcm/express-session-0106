const express = require('express');
const app = express();
const expressSession = require('express-session');
const bcrypt = require('bcrypt');


const users = [
    { username: 'abc', password: '$2b$08$N8CY5SxGdfm7OlkHG7F9XeuEd5HS3.p/MqrUUW1Aieh.X9m66aDQi'}
];

app.use(expressSession({
    secret: 'MERN_STACK_0106 AAA',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        maxAge: 300000   
    }
}));

app.get('/login', (req, res) => {
    req.session.LOGIN = true;
    res.json({ message: 'DANG NHAP THANH CONG' });
});

app.get('/dashboard', (req, res) => {
    const { LOGIN } = req.session;
    if (LOGIN) return res.json({ message: 'CHAO BAN _ TRANG DASHBOARD' });
    res.redirect('/demo-session/err-login');
});

app.get('/err-login', (req, res) => {
    res.json({ message: 'VUI LONG DANG NHAP' });
});

app.get('/add-user/:username/:password', async (req, res) => {
    const { username, password } = req.params;
    const passHash = await bcrypt.hash(password, 8);
    console.log({ passHash })
    users.push({ username, password: passHash });
    res.send({ passHash, users })
})

app.get('/login-user/:username/:password', async (req, res) => {
    const { username, password } = req.params;

    let infoUser = users.find(user => Object.is(username.toString(), user.username.toString()));

    let isMatching = await bcrypt.compare(password, infoUser.password);
    if (isMatching) res.send({ message: 'PASSWORD MATCHING' });
    return res.send({ message: 'PASSWORN NOT MATCHING ****' });
})

app.listen(3000, () => console.log(`server started at port 3000`));