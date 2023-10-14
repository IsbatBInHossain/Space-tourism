import { Link } from 'react-router-dom'
import { data } from '../lib/constants/data'

const destinations = data.destinations

console.log(destinations)

const Destination = () => {
  return (
    <section className='w-full h-full flex flex-col gap-6 sm:gap-10 md:flex-row md:justify-between items-center bg-no-repeat text-white bg-cover bg-center md:bg-[url("/assets/destination/background-destination-desktop.jpg")] sm:bg-[url("/assets/destination/background-destination-tablet.jpg")] bg-[url("/assets/destination/background-destination-mobile.jpg")]'>
      <div className=' mt-24 sm:mt-32 w-full'>
        <h2 className=' font-barlow-condensed text-center sm:text-left sm:ml-14 sm:text-xl sm:tracking-[3.38px] uppercase tracking-[2.7px] '>
          <span className=' text-gray-500 mr-3'>01</span> Pick your destination
        </h2>
      </div>
      <div className='w-44 h-44 sm:w-[300px] sm:h-[300px]'>
        <img src='/assets/destination/image-moon.png' alt='moon picture' />
      </div>
      <div>
        <ul className=' flex uppercase font-barlow-condensed text-[#D0D6F9] text-sm gap-6 tracking-[2.36px] sm:tracking-[2.7x] sm:text-base'>
          <li>
            <Link to='/destination/moon'>Moon</Link>
          </li>
          <li>
            <Link to='/destination/mars'>Mars</Link>
          </li>
          <li>
            <Link to='/destination/europa'>Europa</Link>
          </li>
          <li>
            <Link to='/destination/titan'>Titan</Link>
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <h1 className=' font-bellefair uppercase text-[56px] sm:text-[80px]'>
          Moon
        </h1>
        <p className=' pl-6 pr-6 font-barlow text-[15px]  text-center text-[#D0D6F9] leading-6 w-[45ch] sm:text-base sm:leading-7 sm:w-[72ch]'>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
      </div>
      <div className=' h-px w-[80%] bg-[#979797]' />
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-16'>
        <div className='text-center'>
          <h3 className=' font-barlow-condensed text-sm tracking-[2.36px] uppercase text-[#D0D6F9]'>
            Avg. distance
          </h3>
          <p className=' font-bellefair text-[28px]'>384,400 km</p>
        </div>
        <div className='text-center'>
          <h3 className=' font-barlow-condensed text-sm tracking-[2.36px] uppercase text-[#D0D6F9]'>
            Est. travel time
          </h3>
          <p className=' font-bellefair text-[28px]'>3 days</p>
        </div>
      </div>
    </section>
  )
}

export default Destination
