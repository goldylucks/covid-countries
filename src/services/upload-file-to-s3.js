export default function makeUploadFileToS3({ AWS, fs }) {
  const s3 = getS3({ AWS })
  return async function uploadFileToS3({ fullFilePath }) {
    const fileStream = fs.createReadStream(fullFilePath)
    fileStream.on('error', function (error) {
      // TODO: Handle error
      console.log('File Error', error)
    })
    const uploadParams = {
      Bucket: 'covid-countries',
      Key: 'public/countries-count.csv',
      Body: fileStream,
      ACL: 'public-read',
    }
    await s3.upload(uploadParams).promise()
  }
}

// when the app will grow, we'll probably create a new service that will hold
// the s3 instance and delegate specific operations to lower level services
export const getS3 = ({ AWS }) => {
  AWS.config.update({ region: 'us-west-2' })
  return new AWS.S3({ apiVersion: '2006-03-01' })
}
