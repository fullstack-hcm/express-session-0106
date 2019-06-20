const express = require('express');
const app = express();
const expressSession = require('express-session');

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

app.listen(3000, () => console.log(`server started at port 3000`));