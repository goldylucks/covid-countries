export default function makeSeedDbCtrl({ seedCountries }) {
  return async function seedCountriesCtrl() {
    try {
      return await trySeedCountriesCtrl({ seedCountries })
    } catch (error) {
      return catchSeedCountriesCtrl({ error })
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

export function catchSeedCountriesCtrl({ error }) {
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
