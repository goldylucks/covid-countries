import makeSeedCountries from './seed-countries'
import makeGetCountriesCount from './get-countries-count'

import { fetchCountries } from '../services'
import { countryDb } from '../data-access'

const getCountriesCount = makeGetCountriesCount({ countryDb })
const seedCountries = makeSeedCountries({ countryDb, fetchCountries })

const countryService = Object.freeze({
  getCountriesCount,
  seedCountries,
})

export default countryService
export { getCountriesCount, seedCountries }
