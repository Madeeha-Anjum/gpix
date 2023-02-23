import logo from './assets/logo.svg'

const App = () => {
  return (
    <>
      <div className='flex'>
        <img src={logo} alt='logo' />
        <h1 className='text-3xl font-bold underline m-auto'>Hello world!</h1>
      </div>
    </>
  )
}

export default App
