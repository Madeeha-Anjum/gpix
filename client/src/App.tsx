import logo from './assets/logo.svg'
import axios from './utils/axios'
import { useState } from 'react'

const App = () => {
  const [text, setText] = useState('Push button to get response from server!')

  const getTest = async () => {
    axios
      .get('/')
      .then((res) => {
        console.log('res', res)
        setText(res.data)
      })
      .catch((err) => {})
  }
  return (
    <>
      <div className='flex mb-10'>
        <img src={logo} alt='logo' />
        <h1 className='text-3xl font-bold underline m-auto'>Hello world!</h1>
      </div>
      <div className='space-y-4'>
        <button
          className='p-2 border rounded-lg border-black bg-green-400 bg-opacity-40 hover:bg-green-900 hover:bg-opacity-40'
          onClick={getTest}
        >
          Server Test
        </button>
        <p>{text}</p>
      </div>
    </>
  )
}

export default App
