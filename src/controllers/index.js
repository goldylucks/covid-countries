import makeSeedDbCtrl from './seed-countries-ctrl'
import makeGetCountriesCountCtrl from './get-countries-count-ctrl'
import notFound from './not-found'

import { getCountriesCount, seedCountries } from '../use-cases'

const getCountriesCountCtrl = makeGetCountriesCountCtrl({ getCountriesCount })
const seedCountriesCtrl = makeSeedDbCtrl({ seedCountries })

const countriesController = Object.freeze({
  getCountriesCountCtrl,
  notFound,
  seedCountriesCtrl,
})

export default countriesController
export { getCountriesCountCtrl, notFound, seedCountriesCtrl }
