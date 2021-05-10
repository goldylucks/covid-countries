import mongodb from 'mongodb'

import makeCountryDb from './country-db'

const MongoClient = mongodb.MongoClient
const url = process.env.MONGO_CONNECTION_STRING || 'mongodb://db:27017'
const dbName = 'covid-countries'
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

export async function makeDb() {
  if (!client.isConnected()) {
    await client.connect()
  }
  return client.db(dbName)
}

const countryDb = makeCountryDb({ makeDb })

const dbs = Object.freeze({ countryDb })

export default dbs

export { countryDb }
