const jwt = require('jsonwebtoken');

// jwt.sign({message: "MERN_STACK"}, 'KEY ANYSTRING', (err, token) => {
// if (err) console.error(err);
//     console.log(token);
// });

// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiTUVSTl9TVEFDSyIsImlhdCI6MTU2MTE3NTI2Nn0.ZBLBSxy6kCFZuG7GZ6459343bvhirgzVhAJJzPGXDIc`;
// jwt.verify(token, 'KEY ANYSTRING', (err, data) => {
//     if (err) console.error(err);
//     console.log(data);
// })

const KEY = 'HELLO MERNSTACK_0106';

const signPromise = objData => {
    return new Promise(resolve => {
        try {
            jwt.sign(objData, KEY, (err, token) => {
                if (err) resolve({ error: true, message: err.message });
                resolve({ error: false, token });
            })
        } catch (error) {
            return resolve({ error: true, message: error.message });
        }
    })
}

const verifyPromise = token => {
    return new Promise(resolve => {
        try {
            jwt.verify(token, KEY, (err, data) => {
                if (err) resolve({ error: true, message: err.message });
                return resolve({ error: false, data });
            })
        } catch (error) {
            return resolve({ error: true, message: error.message });
        }
    })
}

module.exports = {
    signPromise, verifyPromise
}