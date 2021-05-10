import express from 'express'
import dotenv from 'dotenv'

import {
  getCountriesCountCtrl,
  notFound,
  seedCountriesCtrl,
} from './controllers'
import makeCallback from './express-callback'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
const apiRoot = '/api'

app.get(`${apiRoot}/countries/count`, makeCallback(getCountriesCountCtrl))
app.post(`${apiRoot}/countries/seed`, makeCallback(seedCountriesCtrl))
app.use(makeCallback(notFound))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

export default app
