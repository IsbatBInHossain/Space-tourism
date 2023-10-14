import React from 'react'
import { data } from '../lib/constants/data'

const crews = data.crews

console.log(crews)

const Crew = () => {
  return (
    <section className='w-full h-full flex flex-col md:flex-row md:justify-between justify-center items-center bg-no-repeat bg-cover bg-center md:bg-[url("/assets/crew/background-crew-desktop.jpg")] sm:bg-[url("/assets/crew/background-crew-tablet.jpg")] bg-[url("/assets/crew/background-crew-mobile.jpg")]'></section>
  )
}

export default Crew
