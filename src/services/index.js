import fs from 'fs'

import axios from 'axios'
import { ExportToCsv } from 'export-to-csv'
import AWS from 'aws-sdk'

import makeFetchCountries from './fetch-countries'
import makeGenerateCountriesCountCsvFile from './generate-countries-count-csv-file'
import makeUploadFileToS3 from './upload-file-to-s3'

const fetchCountries = makeFetchCountries({ axios })
const uploadFileToS3 = makeUploadFileToS3({ AWS, fs })
const generateCountriesCountCsvFile = makeGenerateCountriesCountCsvFile({
  ExportToCsv,
  fs,
})

const services = Object.freeze({
  fetchCountries,
  generateCountriesCountCsvFile,
  uploadFileToS3,
})

export default services

export { fetchCountries, generateCountriesCountCsvFile, uploadFileToS3 }
