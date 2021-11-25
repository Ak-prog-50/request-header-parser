// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const port = process.env.PORT || 3000

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


//whoami
app.get('/whoami',(req,res) => {
  const ipaddress = req.headers['x-forwarded-for'] || req.ip
  const language = req.headers['accept-language']
  const software = req.headers['user-agent']
  res.json({ipaddress, language, software})
})


// listen for requests :)
app.listen(port, _ => console.log(`App is listening on port ${port}`))