import 'reflect-metadata'
import express from 'express'

import './database'

const app = express()

app.post('/test', (request, response) => {
  return response.send('Ola nlw')
})

app.listen(3333, () => console.log('Server is running!'))