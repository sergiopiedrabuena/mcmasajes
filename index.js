//llamado a express module
const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));

//body parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

//render de index principal
app.get('/', (req, res)=>{
    res.render('index')
})

//print en console
app.listen(3000, ()=>{
    console.log('Servidor activo en http://localhost:3000')
})
