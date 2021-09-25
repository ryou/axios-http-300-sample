const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.post('/api/302', (req, res) => {
  res.redirect('/redirect-target')
})

app.post('/api/303', (req, res) => {
  res.redirect(303, '/redirect-target')
})

app.post('/api/307', (req, res) => {
  res.redirect(307, '/redirect-target')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
