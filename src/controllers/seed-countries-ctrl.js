export default function makeSeedDbCtrl({ seedCountries }) {
  return async function seedCountriesCtrl() {
    try {
      return await trySeedCountriesCtrl({ seedCountries })
    } catch (error) {
      return errorSeedCountriesCtrl({ error })
    }
  }
}

export async function trySeedCountriesCtrl({ seedCountries }) {
  const data = await seedCountries()
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    statusCode: 200,
    body: data,
  }
}

export function errorSeedCountriesCtrl({ error }) {
  // TODO: Error logging
  console.log(error)

  return {
    headers: {
      'Content-Type': 'application/json',
    },
    statusCode: 400,
    body: {
      error: error.message,
    },
  }
}
