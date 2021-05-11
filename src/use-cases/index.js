import makeSeedCountries from './seed-countries'
import makeGetCountriesCount from './get-countries-count'
import makePostCountriesCountToS3 from './post-countries-count-to-s3'

import {
  fetchCountries,
  generateCountriesCountCsvFile,
  uploadFileToS3,
} from '../services'
import { countryDb } from '../data-access'

const getCountriesCount = makeGetCountriesCount({ countryDb })
const postCountriesCountToS3 = makePostCountriesCountToS3({
  countryDb,
  generateCountriesCountCsvFile,
  uploadFileToS3,
})
const seedCountries = makeSeedCountries({ countryDb, fetchCountries })

const countryService = Object.freeze({
  getCountriesCount,
  seedCountries,
  postCountriesCountToS3,
})

export default countryService
export { getCountriesCount, seedCountries, postCountriesCountToS3 }
