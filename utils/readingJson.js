const ler = require('../utils/readingJson');

const fs = require('fs');

fs.readFile('teste-take-blip.json', function(err, data) {
  if(err) throw err;

  const users = JSON.parse(data);

  console.log(users)
})

client_secret: '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';
