const jwt = require('jsonwebtoken');

const KEY = 'MERN_STACK_0106';
const objDemo = { username: 'abc', image: 'abc.png' };

// jwt.sign(objDemo, KEY, (err, token) => {
//     if (err) console.log({ err });
//     console.log({ token })
// })

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiYyIsImltYWdlIjoiYWJjLnBuZyIsImlhdCI6MTU2MTIxMDAxM30.Xa9WU5rn9RluMM0yOS1vDoxjHZstBitFYYBMqFU0cn0';
// jwt.verify(TOKEN, KEY, (err, data) => {
//     if (err) {
//         if (err.message === 'invalid signature') {
//             return console.log(`aaa`)
//         }
//         return console.log({ err })
//     }
//     console.log({ data })    
// });

const verifyPromise = () => {
    return new Promise(resolve => {
        jwt.verify(TOKEN, KEY, (err, data) => {
            if (err) {
                if (err.message === 'invalid signature') {
                    return resolve({ error: true, message: 'aa' })
                }
                return resolve({ error: true, message: 'aa' })
            }
            resolve({ error: false, data });
        });
    })
}

verifyPromise()
    .then(result => console.log(result))

/** KHAI NIEM: STATELESS - STATEFUL */