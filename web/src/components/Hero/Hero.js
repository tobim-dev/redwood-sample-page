const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white min-w-screen">
      <div className="flex flex-col flex-col-reverse items-center justify-center mx-auto lg:flex-row lg:max-w-4xl lg:p-0">
        <div className="container flex flex-col w-full px-5 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:px-0 md:px-10 sm:items-center lg:items-start lg:mb-0">
          <h1 className="font-sans text-4xl font-extrabold leading-none text-black sm:text-5xl xl:text-6xl sm:text-center lg:text-left">
            <span className="text-gray-800">Stay focused</span>
            <span className="block text-blue-400">and know yourself.</span>
          </h1>
          <p className="mt-6 text-base text-gray-600 xl:text-lg s">
            Your guide to mental health and happiness. How about try to
            meditate? Start to meditate just 5 min per day and see the results.
          </p>
          <div className="items-center justify-center m-10 rflex">
            <a
              href="#_"
              className="flex items-center self-start justify-center px-5 py-3 text-base font-medium leading-tight text-white bg-blue-800 border border-transparent rounded-lg shadow md:py-4 md:text-lg xl:text-xl md:px-10"
            >
              Come with us
            </a>
          </div>
        </div>
        <div className="px-5 md:w-2/3 lg:w-1/2">
          <img
            src="https://ouch-cdn.icons8.com/preview/123/00b6b699-606c-42b1-ba42-20f17872a135.png"
            alt="Illustration of person meditating"
            className="object-cover w-full h-50"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero