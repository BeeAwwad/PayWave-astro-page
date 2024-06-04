import SubHeader from "./subHeader"
import { Button } from "@/components/ui/button"

function sectionThree() {
  const subHeaderContent = [
    { header: "End-to-end security" },
    {
      paragraph:
        "We protect your money and data with the leading edge internet security protocols",
    },
  ]
  return (
    <>
      <SubHeader
        header={subHeaderContent[0].header}
        paragraph={subHeaderContent[1].paragraph}
      >
        <img
          src="/images/section/section-3/section-3.svg"
          alt="padlock-svg"
          className="w-8"
        />
      </SubHeader>
      <h2 className="text-[#327CEB] text-center text-xl font-poppins mt-16">
        Merchant
      </h2>
      <section className="relative bg-[#002C6E] font-poppins p-10 mt-9 md:mx-16 xl:mx-48 md:rounded-2xl h-[620px] pt-28">
        {/* Small screen image */}
        <img
          className="absolute inset-x-0 inset-y-0 w-full h-full z-0 md:hidden"
          src="/images/section/section-3/background-sm.png"
          alt="background image"
        />
        {/* Large screen image */}
        <img
          className="absolute inset-x-0 inset-y-0 w-full h-full z-0 hidden md:block"
          src="/images/section/section-3/background.png"
          alt="background image"
        />
        <div className="flex flex-col items-center justify-center">
          <p className="text-white text-center text-xl md:text-4xl lg:text-5xl max-w-[400px] md:max-w-[500px] lg:max-w-[650px]">
            Recieve payments from your customers
            <span className="text-[#327CEB] italic"> Instantly </span>
            with QR pay or Merchant ID
          </p>
          <Button className="bg-white text-[#002C6E] text-lg mt-12 hover:text-white hover:bg-[#327CEB] ease-in transform duration-300 group hover:scale-105">
            <span className="relative inline-block transition-transform duration-300 group-hover:scale-105">
              Open a Merchant Account
            </span>
          </Button>
        </div>
        <div className="relative mt-20">
          <img
            className="absolute -top-20 sm:-top-24 lg:-top-9 right-2/4 sm:right-1/2 lg:right-[70%] xl:right-3/4 size-40 sm:size-52 z-50"
            src="/images/section/section-3/section-3-instant.svg"
            alt="instant-payment"
            loading="lazy"
          />
          <div className="qr-code size-12 top-24 sm:top-20 right-[2%] sm:right-16 sm:size-20 z-30 md:right-10 lg:right-[15%] lg:top-52"></div>
          <img
            className="absolute z-0 right-[14%] sm:right-[20%] size-64 sm:size-96 lg:left-[15%]"
            src="/images/section/section-3/section-3-user-musa.svg"
            alt="user_musa"
            loading="lazy"
          />
          <img
            className="absolute top-44 sm:top-52 right-2 sm:right-15 lg:right-[29%] size-48 sm:size-72  z-50 "
            src="/images/section/section-3/section-3-scan.svg"
            alt="scan_code_image"
            loading="lazy"
          />
        </div>
      </section>
    </>
  )
}

export default sectionThree
