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
      <section className="bg-[#002C6E] font-poppins p-10 mt-9 md:mx-16 xl:mx-48 md:rounded-2xl h-[620px] pt-32">
        <div className="flex flex-col items-center justify-center">
          <p className="text-white text-center text-xl md:text-4xl lg:text-5xl max-w-[400px] md:max-w-[500px] lg:max-w-[650px]">
            Recieve payments from your customers
            <span className="text-[#327CEB] italic"> Instantly </span>
            with QR pay or Merchant ID
          </p>
          <Button className="bg-white text-[#002C6E] text-lg mt-12 hover:text-white hover:bg-[#327CEB] ease-in">
            Open a Merchant Account
          </Button>
        </div>
        <div className="relative mt-20">
          <img
            className="absolute top-0 left-[-3.125rem] sm:left-0 size-40 sm:size-48 lg:left-[10%] z-50"
            src="/images/section/section-3/section-3-instant.svg"
            alt="instant-payment"
          />
          <div className="qr-code size-12 top-24 right-1 sm:size-20 sm:top-32 sm:right-20 z-30 md:right-10 lg:right-[15%] lg:top-52"></div>
          <img
            className="absolute z-0 left-6 sm:left-[5%] sm:size-96 lg:left-[15%]"
            src="/images/section/section-3/section-3-user-musa.svg"
            alt="user_musa"
          />
          <img
            className="absolute top-44 right-[2%] sm:size-72 sm:right-10 sm:top-52 md:right-0 z-50 lg:right-[29%]"
            src="/images/section/section-3/section-3-scan.svg"
            alt="scan_code_image"
          />
        </div>
      </section>
    </>
  )
}

export default sectionThree
