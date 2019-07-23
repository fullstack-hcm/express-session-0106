const bcrypt = require('bcrypt');

const passPlain = 'passwordhere2';

// bcrypt.genSalt(10, (err, salt) => {
//     if (err) console.log({ error: true, message: err.message });
//     bcrypt.hash(passPlain, salt, (err, hashString) => {
//         if (err) console.log({ error: true, message: err.message });
//         console.log(`hashString - ${hashString}`)
//     })
// });

// bcrypt.hash(passPlain, 8, (err, hashString) => {
//     if (err) console.log({ error: true, message: err.message });
//     console.log(`hashString - ${hashString}`)
// })

// const passHash = '$2b$10$VkAdgxgrXqDQb4xISAfRteVBLNJTc0u2rK6t6QDo7hpvriLXtB4qe';
// bcrypt.compare(passPlain, passHash, (err, data) => {
//     if (err) console.log({ error: true, message: err.message });
//     console.log(`result - ${data}`)
// })

// bcrypt.genSalt(8)
//     .then(salt => {
//         bcrypt.hash(passPlain, salt)
//             .then(hashString => console.log(`hashString: ${hashString}`))
//             .catch(err => console.log(err));
//     })
//     .catch(err => console.log({ err }));



// const passHash = '$2b$08$1qR/ZojCFhp4Mk6cNrTQrO.J7m5T6kbul5.J7l69WllNsVL41uLh2';
// bcrypt.compare(passPlain, passHash)
//     .then(result => console.log(`result : ${result}`))
//     .catch(err => console.log(err));

const hashHandle = async () => {
    let salt        = await bcrypt.genSalt(8);
    let hashString  = await bcrypt.hash(passPlain, salt);
    console.log({ hashString })
}

const passHash = '$2b$08$N8CY5SxGdfm7OlkHG7F9XeuEd5HS3.p/MqrUUW1Aieh.X9m66aDQi';
const compareHandle = async () => {
    let isMatching = await bcrypt.compare(passPlain, passHash);

    console.log(`isMatching: ${isMatching}`)
}

hashHandle();
// compareHandle();

/**
 * cài đặt yarn     : npm install -g yarn 
 * thêm package     : yarn add [package_name] === npm install [package_name] --save
 * cài đặt project  : yarn install === npm install
 */