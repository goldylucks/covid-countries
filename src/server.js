import express from 'express'
import dotenv from 'dotenv'

import {
  getCountriesCountCtrl,
  notFound,
  seedCountriesCtrl,
  postCountriesCountToS3Ctrl,
} from './controllers'
import makeCallback from './express-callback'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
const apiRoot = '/api'

app.get(`${apiRoot}/countries/count`, makeCallback(getCountriesCountCtrl))
app.post(
  `${apiRoot}/countries/post-count-to-s3`,
  makeCallback(postCountriesCountToS3Ctrl)
)
app.post(`${apiRoot}/countries/seed`, makeCallback(seedCountriesCtrl))
app.use(makeCallback(notFound))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

export default app
