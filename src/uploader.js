import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

const MyUploader = () => {
const getUploadParams = () => ({ url: 'https://nft.storage/api/upload',  
headers: { "Authorization": "Bearer API KEY"
 }})
;//"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5ASDASDAXCZg0NTY5MDEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYxODU5NzczODM5NCwibmFtZSI6ImtleTEifQ.uNeFoDDU_M8uzTNTVQ3uYnxejjVNldno5nFuxzoOWMk"
const handleChangeStatus = ({ meta, file, xhr }, status) => {
 if (xhr?.response){
  const {value: {cid}} = JSON.parse(xhr.response)
  console.log(`CID:${cid}`)
  console.log('meta: ', meta)
  console.log('file', file)
  console.log(`other information: `, JSON.parse(xhr.response))
}
}
const handleSubmit = (files, allFiles) => {
console.log(files.map(f => f.meta))
allFiles.forEach(f => f.remove())
}

return (
<Dropzone
getUploadParams={getUploadParams}
onChangeStatus={handleChangeStatus}
onSubmit={handleSubmit}
accept='image/*, image/gif, audio/*, video/*, gif/*, .gif, .pdf, .mp3'
inputContent={() => ( 'Drag Files')}
/>
)
}

<MyUploader />

export default MyUploader; 
