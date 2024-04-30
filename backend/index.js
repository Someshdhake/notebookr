const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
var cors = require('cors')


const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

//Avaliables Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Notebook backend listening at http://localhost:${port}`)
})