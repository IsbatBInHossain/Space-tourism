import { useState } from 'react'
import { Link } from 'react-router-dom'

const imageSources = [
  '/assets/shared/icon-hamburger.svg',
  '/assets/shared/icon-close.svg',
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [imageSrc, setImageSrc] = useState(imageSources[0])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpen) setImageSrc(imageSources[0])
    else setImageSrc(imageSources[1])
  }

  return (
    <nav className='flex justify-between items-center absolute top-0 left-0 w-full h-24 text-white md:mt-8'>
      <div
        className='w-10 h-10 sm:w-12 sm:h-12 z-50 ml-14'
        aria-controls='nav-menu'
      >
        <img src='/assets/shared/logo.svg' />
      </div>
      <div className='nav-line' />

      <div className=' font-barlow-condensed '>
        <div
          className='block absolute right-8 cursor-pointer top-6 sm:hidden w-8 h-8 z-50'
          id='menu'
          onClick={toggleMenu}
        >
          <img src={imageSrc} alt='menu' />
        </div>
        <ul
          className={`nav-menu ${isMenuOpen ? 'flex' : 'hidden'} sm:flex`}
          id='nav-menu'
        >
          <li>
            <Link to='/'>
              <span
                aria-hidden
                className='font-bold mr-2 inline-block sm:hidden md:inline-block'
              >
                00
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link to='/destination'>
              <span
                aria-hidden
                className='font-bold mr-2 inline-block sm:hidden md:inline-block'
              >
                01
              </span>{' '}
              Destination
            </Link>
          </li>
          <li>
            <Link to='/crew'>
              <span
                aria-hidden
                className='font-bold mr-2 inline-block sm:hidden md:inline-block'
              >
                02
              </span>{' '}
              Crew
            </Link>
          </li>
          <li>
            <Link to='/technology'>
              <span
                aria-hidden
                className='font-bold mr-2 inline-block sm:hidden md:inline-block'
              >
                03
              </span>{' '}
              Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
