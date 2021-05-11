import makeSeedDbCtrl from './seed-countries-ctrl'
import makeGetCountriesCountCtrl from './get-countries-count-ctrl'
import makePostCountriesCountToS3Ctrl from './post-countries-count-to-s3-ctrl'
import notFound from './not-found'

import {
  getCountriesCount,
  seedCountries,
  postCountriesCountToS3,
} from '../use-cases'

const getCountriesCountCtrl = makeGetCountriesCountCtrl({ getCountriesCount })
const seedCountriesCtrl = makeSeedDbCtrl({ seedCountries })
const postCountriesCountToS3Ctrl = makePostCountriesCountToS3Ctrl({
  postCountriesCountToS3,
})

const countriesController = Object.freeze({
  getCountriesCountCtrl,
  postCountriesCountToS3Ctrl,
  seedCountriesCtrl,
  notFound,
})

export default countriesController

export {
  getCountriesCountCtrl,
  seedCountriesCtrl,
  postCountriesCountToS3Ctrl,
  notFound,
}
