const mkdirp = require('mkdirp');
const fs = require('fs');

mkdirp('./public')

let content = fs.readFileSync('web/index.html').toString();
content = content.replace('Anonymous', process.env.USERNAME && process.env.USERNAMES || 'Nobody')

fs.writeFileSync('public/index.html', content);
