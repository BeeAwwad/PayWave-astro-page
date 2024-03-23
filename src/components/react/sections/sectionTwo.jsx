import SubHeader from "./subHeader"
import { Button } from "@/components/ui/button"

const subHeaderContent = [
  { header: "Take control of your finances" },
  {
    paragraph:
      "All your bill payments in one place make your daily spending seamless",
  },
]
function SectionTwo() {
  return (
    <>
      <SubHeader
        header={subHeaderContent[0].header}
        paragraph={subHeaderContent[1].paragraph}
      >
        <h3>Payments</h3>
      </SubHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-row-2 mx-5 md:mx-16 xl:mx-48 font-poppins gap-6">
        <div className="md:col-span-2 bg-[url('/images/section/section-2-sm.png')] md:bg-[url('/images/section/section-2.png')] bg-no-repeat bg-center text-white rounded-3xl p-6 md:py-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-6 max-w-[600px]">
            Unified payment platform for all your finances
          </h2>
          <p className="mt-6 max-w-[550px] md:text-lg">
            From Airtime, Data to your cable plans, paywave synergizes all your
            payment channels to one app.
          </p>
          <Button className="text-base bg-[#002C6E] hover:bg-[#327CEB] ease-in mt-7">
            Sign up now
          </Button>
        </div>
        <div className="bg-[#F6F9FF] h-72 flex justify-center items-center p-4  rounded-3xl">
          <p className="md:text-lg max-w-[550px]">
            Stay connect at all times when you buy Airtime and renew your Data
            Bundles on paywave.
          </p>
        </div>
        <div className="bg-[#F6F9FF]  h-72 flex justify-center items-center p-4  rounded-3xl">
          <p className="md:text-lg max-w-[550px]">
            Never default on your bills with paywave’s easy access to utility
            bill payment.
          </p>
        </div>
      </div>
    </>
  )
}

export default SectionTwo
