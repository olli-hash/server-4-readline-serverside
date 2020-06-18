const port = 8080
const path = require('path')

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const express = require('express')
const handlebars = require('express-handlebars')
var app = express()
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))				// views verfügbar machen
app.use("html/script", express.static('html/script'))
app.use("html/css", express.static('html/css'))


// configuration by function... non-blocking(?)...
app.get('/', function (req, res) {
   
})


app.get('/html', function (req, res) {
   
})


app.listen(port, function() {
    console.log('http://localhost:' + port)
	
	rl.question('What do you think of Node.js? ', (answer) => {
	  // TODO: Log the answer in a database
	  console.log(`Thank you for your valuable feedback: ${answer}`);

	  rl.close();
	});


})




