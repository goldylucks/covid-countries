export default function makePostCountriesCountToS3Ctrl({
  postCountriesCountToS3,
}) {
  return async function postCountriesCountToS3Ctrl() {
    try {
      return await tryPostCountriesCountToS3Ctrl({ postCountriesCountToS3 })
    } catch (error) {
      return catchPostCountriesCountToS3Ctrl({ error })
    }
  }
}

export async function tryPostCountriesCountToS3Ctrl({
  postCountriesCountToS3,
}) {
  const data = await postCountriesCountToS3()
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    statusCode: 200,
    body: data,
  }
}

export function catchPostCountriesCountToS3Ctrl({ error }) {
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
