import { data } from '../lib/constants/data'

const destinations = data.destinations

console.log(destinations)

const Destination = () => {
  return (
    <section className='w-full h-full flex flex-col md:flex-row md:justify-between justify-center items-center bg-no-repeat bg-cover bg-center md:bg-[url("/assets/destination/background-destination-desktop.jpg")] sm:bg-[url("/assets/destination/background-destination-tablet.jpg")] bg-[url("/assets/destination/background-destination-mobile.jpg")]'></section>
  )
}

export default Destination
