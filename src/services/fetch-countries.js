// Not sure this is a "service" per se, tho it's definitly not a util
// as the app grows, we'll find a more suiting place for this
export default function makeFetchCountries({ axios }) {
  return async function fetchCountries() {
    const URL = 'https://covid.ourworldindata.org/data/owid-covid-data.json'
    const { data: countriesHash } = await axios.get(URL)
    return toCountriesArray(countriesHash)
  }
}

// some will prefer to put this in another file (SoC), but I don't,
// since ATM the only consumer of this helper method is this service
export const toCountriesArray = countriesHash =>
  Object.entries(countriesHash).map(([countryCode, country]) => ({
    countryCode,
    ...country,
  }))
