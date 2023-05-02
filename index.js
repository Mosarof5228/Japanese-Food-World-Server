const express = require('express')
const app = express()
const port = 5000
const chiefs = require('./data/chiefs.json')
var cors = require('cors')




app.use(cors())
app.get('/', (req, res) => {
    res.send('Welcome to Japanese Resturent')
})

app.get('/chiefs', (req, res) => {
    res.send(chiefs);

})

app.get('/chiefs/:id', (req, res) => {
    const id = req.params.id;
    const selectedChief = chiefs.find(chief => chief.id == id)
    res.send(selectedChief)


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})