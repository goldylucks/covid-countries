// Not sure this is a "service" per se, tho I won't qualify it as a util
// as the app grows, we'll find a more suiting place for this
export default function makeGenerateCountriesCountCsvFile({ ExportToCsv, fs }) {
  return async function generateCountriesCountCsvFile({ count }) {
    const options = getOptions()
    const csvExporter = new ExportToCsv(options)
    const csvData = csvExporter.generateCsv([{ count }], true)
    await fs.promises.writeFile(getFullFilePath(), csvData)
    return getFullFilePath()
  }
}

export const getOptions = () => ({
  title: 'Number of countries with corona',
  showTitle: true,
})

export const getFilename = () => {
  const [, month, dd, yyyy] = String(new Date()).split(' ')
  return `Corona countries count - ${month} ${dd} ${yyyy}`
}

export const getFullFilePath = () => `/tmp/${getFilename()}`
