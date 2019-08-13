const mkdirp = require('mkdirp');
const fs = require('fs');

mkdirp('./public')

let content = fs.readFileSync('web/index.html').toString();
let str1 =(process.env.USERNAME || 'Nobody')
let res = str1.concat(process.env.USERNAMES || 'Nobody')
content = content.replace('Anonymous', res)
                        

fs.writeFileSync('public/index.html', content);
