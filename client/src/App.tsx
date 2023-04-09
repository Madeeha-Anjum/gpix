import logo from './assets/logo.svg'
import axios from './utils/axios'
import { useState } from 'react'
import Button from './components/Button'

const sendGetBucketInfoRequest = async () => {
  return axios
    .get('/')
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}
const sendGetImageRequest = async (fileName) => {
  return axios
    .get(`${fileName}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

const App = () => {
  const [images, setImages] = useState([])

  const pullImages = async () => {
    // get all file names
    const bucketInfo = await sendGetBucketInfoRequest()
    const fileNames = bucketInfo.map((file) => {
      return file.name
    })
    // get all images
    const res = await Promise.all([
      ...fileNames.map((fileName) => sendGetImageRequest(fileName))
    ])

    setImages(res)
    // console.log('res', JSON.stringify(res, null, 2))
  }
  return (
    <>
      <div className='flex mb-10'>
        <img src={logo} alt='logo' />
        <h1 className='text-3xl font-bold underline m-auto'>Welcome</h1>
      </div>
      <div className='block w-100 m-5'>
        <Button className='w-full text-black' onClick={pullImages}>
          Pull from the Cloud
        </Button>
      </div>
      <div className='grid grid-cols-3 gap-3'>
        {images.map((image) => {
          return (
            <div key={image.id} className='w-80 border'>
              <img src={image.link.mediaLink} className='w-100'></img>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
