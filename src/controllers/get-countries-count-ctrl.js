export default function makeGetCountriesCountCtrl({ getCountriesCount }) {
  return async function getCountriesCountCtrl() {
    try {
      return await tryGetCountriesCountCtrl({ getCountriesCount })
    } catch (error) {
      return errorGetCountriesCountCtrl({ error })
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

export function errorGetCountriesCountCtrl({ error }) {
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
