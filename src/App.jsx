import { Outlet } from 'react-router-dom'
import Navbar from './components/shared/Navbar'

const App = () => {
  return (
    <>
      <div className='flex flex-col'>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
