const Home = () => {
  return (
    <section className='w-full h-full flex flex-col md:flex-row md:justify-between justify-center items-center bg-no-repeat bg-cover bg-center md:bg-[url("/assets/home/background-home-desktop.jpg")] sm:bg-[url("/assets/home/background-home-tablet.jpg")] bg-[url("/assets/home/background-home-mobile.jpg")]'>
      <div className='flex flex-col items-center mt-16 lg:mt-72 text-gray-400 lg:ml-36 md:ml-16 xs:mb-16 mb-6 md:text-left text-center md:items-start'>
        <h2 className=' uppercase font-barlow-condensed tracking-[2.7px] sm:text-xl sm:tracking-[3.37px] lg:text-[28px] lg:tracking-[4.72px]'>
          So, you want to travel to
        </h2>
        <h1 className=' text-white text-[80px] font-bellefair uppercase sm:text-[150px]'>
          Space
        </h1>
        <p className=' font-barlow xs:w-[38ch] w-[20ch] mt-10 sm:mt-[-24px] sm:w-[48ch] lg:text-[18px]'>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className=' flex justify-center items-center xs:w-36 xs:h-36 w-24 h-24 sm:w-60 sm:h-60 lg:w-[274px] lg:h-[274px] lg:mr-[165px] lg:mt-72 sm:mt-10 mr-10 bg-white rounded-full translate-x-1/4'>
        <button className=' text-xl uppercase font-bellefair tracking-[1.25px] sm:text-[32px] sm:tracking-[2px]'>
          Explore
        </button>
      </div>
    </section>
  )
}

export default Home
