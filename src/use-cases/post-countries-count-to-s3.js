export default function makePostCountriesCountToS3({
  countryDb,
  generateCountriesCountCsvFile,
  uploadFileToS3,
}) {
  return async function postCountriesCountToS3() {
    const count = await countryDb.getCount()
    const fullFilePath = await generateCountriesCountCsvFile({ count })
    await uploadFileToS3({ fullFilePath })
    return { message: 'Countries count uploaded to S3', countriesCount: count }
  }
}
