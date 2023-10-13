import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
      <div>Logo</div>
      <div className=''>
        <ul className='flex gap-2'>
          <li>
            <Link to='/'>
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link to='/destination'>
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to='/crew'>
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link to='/technology'>
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
