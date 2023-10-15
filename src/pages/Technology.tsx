import React from 'react'
import { data } from '../lib/constants/data'

const technologies = data.technology

const Technology = () => {
  return (
    <section className='w-full h-full flex flex-col md:flex-row md:justify-between justify-center items-center bg-no-repeat bg-cover bg-center md:bg-[url("/assets/technology/background-technology-desktop.jpg")] sm:bg-[url("/assets/technology/background-technology-tablet.jpg")] bg-[url("/assets/technology/background-technology-mobile.jpg")]'></section>
  )
}

export default Technology
