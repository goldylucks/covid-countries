export default function makeGetCountriesCount({ countryDb }) {
  return async function getCountriesCount() {
    return {
      countriesCount: await countryDb.getCount(),
    }
  }
}
