function SectionSix() {
  return (
    <section className="w-full mb-32">
      <div className="relative md:mx-16 lg:mx-32 xl:mx-48 font-poppins bg-[#DCEAFF] pt-20 px-6">
        <img
          className="absolute top-16 left-0 z-0"
          src="/images/section/section-6/background-small.png"
          alt="background image"
        />
        <div className="mx-auto w-fit mb-12  text-center">
          <h2 className="mb-4 text-3xl xl:text-6xl font-semibold max-w-[600px]">
            Get the <span className="text-[#327CEB]">Paywave</span> app
          </h2>
          <p className="max-w-xs text-[#002C6E]">
            Access your money anywheere, anytime with the Paywave app
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row items-center justify-center mb-16">
          <div className="blur-load h-10 z-10">
            <img
              className="w-full h-full object-contain"
              src="/images/section/section-6/play-store.png"
              alt="playstore icon"
            />
          </div>
          <div className="blur-load h-10 z-10">
            <img
              className="w-full h-full"
              src="/images/section/section-6/apple-store.png"
              alt="app store icon"
            />
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="blur-load w-44">
            <img
              className="w-full h-full object-contain"
              src="/images/section/section-6/paywave-app.png"
              alt="Paywave app on a phone"
            />
          </div>
          <div className="blur-load absolute top-10 right-48 sm:right-52 w-32">
            <img
              className="w-full"
              src="/images/section/section-6/savings-progress.png"
              alt=""
            />
          </div>
          <div className="blur-load w-36 absolute bottom-0 left-44 sm:left-48">
            <img
              className="w-full h-full object-contain"
              src="/images/section/section-6/buy-data.png"
              alt="options to buy data"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionSix
