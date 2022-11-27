const PORT = 8080
const express = require('express')
const axios = require('axios')
const cheerio = ('cheerio')

//calling express and saving it as 'app'
const app = express()

app.get('/', (req, res
) => {
    res.json('welcome to my climate change API')
})
app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT} `)
})