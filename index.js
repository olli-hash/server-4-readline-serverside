const port = 8080
const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')

var app = express()

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')

app.set('views', path.join(__dirname, 'views'))				// views verfügbar machen
app.use("/script", express.static('script'))



app.get('/', function (req, res) {
   
})


app.listen(port, function() {
    console.log('http://localhost:' + port)
})


