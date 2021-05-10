export default function makeSeedCountries({ countryDb, fetchCountries }) {
  return async function seedCountries() {
    await countryDb.removeAll()
    const countries = await fetchCountries()
    await countryDb.insertMany(countries)
    // TODO
    // recache redis
    return {
      message: 'DB has been seeded and redis has been recached',
    }
  }
}
