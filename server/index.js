const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})
const router = require('./routes');

io.on('connect', socket => {
  console.log('a user connected')
  console.log(socket.id)

  socket.on('disconnect', () => {
    console.log('a user disconnect')
  })
})

const port = process.env.PORT || 5000
app.use(router)
http.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
