const express = require('express');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'static')))
  .get('/', (req, res) => res.send('Hello World!'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
