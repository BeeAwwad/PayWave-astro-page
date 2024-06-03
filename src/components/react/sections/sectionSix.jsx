function SectionSix() {
  return (
    <section className="w-full mb-32">
      <div className="relative md:mx-24 xl:mx-48 font-poppins bg-[#DCEAFF] pt-20 lg:pt-28 px-12 md:rounded-3xl overflow-hidden">
        {/* Small screen image */}
        <img
          className="absolute top-16 right-0 z-0 md:hidden"
          src="/images/section/section-6/background-small.png"
          alt="background image"
        />
        {/* Large screen image */}
        <img
          className="absolute top-12 left-32 z-0 hidden md:block"
          src="/images/section/section-6/background.png"
          alt="background image"
        />
        <div className="mx-auto w-fit mb-12 flex flex-col justify-center items-center max-w-5xl">
          <h2 className="mb-4 text-3xl md:text-4xl xl:text-5xl font-semibold max-w-[600px] text-center">
            Get the <span className="text-[#327CEB]">Paywave</span> app
          </h2>
          <p className="text-[#002C6E] text-center font-normal text-lg lg:text-xl">
            Access your money anywheere, anytime with the Paywave app
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row items-center justify-center mb-16">
          <div className="blur-load h-10 lg:h-12 z-10">
            <img
              className="w-full h-full object-contain"
              src="/images/section/section-6/play-store.svg"
              alt="playstore icon"
            />
          </div>
          <div className="blur-load h-10 lg:h-12 z-10">
            <img
              className="w-full h-full"
              src="/images/section/section-6/apple-store.svg"
              alt="app store icon"
            />
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="blur-load w-44 lg:w-56">
            <img
              className="w-full h-full object-contain"
              src="/images/section/section-6/paywave-app.svg"
              alt="Paywave app on a phone"
            />
          </div>
          <div className="blur-load absolute top-10 right-[65%] sm:right-[58%] w-32 lg:w-40">
            <img
              className="w-full"
              src="/images/section/section-6/savings-progress.svg"
              alt=""
            />
          </div>
          <div className="blur-load w-36 lg:w-48 absolute bottom-5 left-1/2">
            <img
              className="w-full h-full object-contain"
              src="/images/section/section-6/buy-data.svg"
              alt="options to buy data"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionSix
