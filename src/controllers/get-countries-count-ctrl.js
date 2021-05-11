export default function makeGetCountriesCountCtrl({ getCountriesCount }) {
  return async function getCountriesCountCtrl() {
    try {
      return await tryGetCountriesCountCtrl({ getCountriesCount })
    } catch (error) {
      return catchGetCountriesCountCtrl({ error })
    }
  }
}

export async function tryGetCountriesCountCtrl({ getCountriesCount }) {
  const data = await getCountriesCount()
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    statusCode: 200,
    body: data,
  }
}

export function catchGetCountriesCountCtrl({ error }) {
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
