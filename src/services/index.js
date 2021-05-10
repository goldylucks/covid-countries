import axios from 'axios'

import makeFetchCountries from './fetch-countries'
const fetchCountries = makeFetchCountries({ axios })
const services = Object.freeze({ fetchCountries })

export default services

export { fetchCountries }
