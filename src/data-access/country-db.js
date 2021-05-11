const COUNTRIES_COLLECTION = 'countries'

export default function makeCountryDb({ makeDb }) {
  return Object.freeze({
    getCount,
    insertMany,
    removeAll,
  })

  async function getCount() {
    const db = await makeDb()
    return await db.collection(COUNTRIES_COLLECTION).countDocuments()
  }

  async function insertMany(countries) {
    const db = await makeDb()
    const result = await db
      .collection(COUNTRIES_COLLECTION)
      .insertMany(countries)
    return (await result.ops).map(({ _id: id, ...created }) => ({
      id,
      ...created,
    }))
  }

  async function removeAll() {
    const db = await makeDb()
    const result = await db.collection(COUNTRIES_COLLECTION).deleteMany()
    return result.deletedCount
  }
}
