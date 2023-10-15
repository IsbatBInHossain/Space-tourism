import { Outlet } from 'react-router-dom'
import Navbar from './components/shared/Navbar'

const App = () => {
  return (
    <>
      <div className='flex flex-col w-full min-h-screen relative'>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App
