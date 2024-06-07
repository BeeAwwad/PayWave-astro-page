import SubHeader from "./subHeader"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

function SectionTwo() {
  const subHeaderContent = [
    { header: "" },
    {
      paragraph: "",
    },
    {
      secHeader:
        "Having all your bill payments in one place makes your daily spendings seamless",
    },
  ]
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = "/images/section/section-2/section-2.png"
    img.onload = () => {
      setIsLoaded(true)
    }
  }, [])

  return (
    <>
      <SubHeader secHeader={subHeaderContent[2].secHeader}>
        <h3>Payments</h3>
      </SubHeader>
      <section className="grid grid-cols-1 md:grid-cols-2 md:grid-row-2 mx-5 md:mx-16 lg:mx-32 xl:mx-48 gap-6">
        <div
          className={`md:col-span-2 bg-no-repeat bg-center bg-cover text-white rounded-3xl overflow-hidden p-6 md:py-20 min-h-80 sm:min-h-96 ${
            isLoaded
              ? "bg-[url(/images/section/section-2/section-2.png)]"
              : "skeleton-background"
          }`}
        >
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-medium mt-6 max-w-[700px] ${
              isLoaded
                ? "text-white transition-colors duration-300"
                : "text-black"
            }`}
          >
            Unified payment platform for all your finances
          </h2>
          <p
            className={`mt-6 max-w-[550px] md:text-lg ${
              isLoaded
                ? "text-white transition-colors duration-300"
                : "text-black"
            }`}
          >
            From Airtime, Data to your cable plans, paywave synergizes all your
            payment channels to one app.
          </p>
          <Button className="text-base bg-[#002C6E] hover:bg-[#327CEB] ease-in group hover:scale-105 mt-14 md:mt-20 lg:mt-24">
            <span className="transition-transform duration-300 group-hover:scale-105">
              Sign up now
            </span>
          </Button>
        </div>
        <div className="bg-[#F6F9FF] h-fit flex flex-col justify-between pt-16 px-8  rounded-3xl">
          <p className="font-medium text-2xl max-w-[550px]">
            Stay connect at all times when you buy Airtime and renew your Data
            Bundles on paywave.
          </p>
          <div className="self-center mt-20 relative">
            <div className="w-56 rounded-t-2xl overflow-hidden">
              <img
                className="w-fit object-center object-cover"
                src="/images/section/section-2/buy-airtime.svg"
                alt="paywave app on phone"
                loading="lazy"
              />
            </div>

            <div className="rounded-lg overflow-hidden w-24 absolute top-20 right-44">
              <img
                className="w-full"
                src="/images/section/section-2/airtime.svg"
                alt="buy airtime"
              />
            </div>

            <div className="rounded-lg overflow-hidden w-40 absolute bottom-8 left-28">
              <img
                src="/images/section/section-2/subscribe.svg"
                alt="subscribe to data bundle"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#F6F9FF] h-full flex flex-col justify-between pt-16 px-8  rounded-3xl">
          <p className="font-medium text-2xl max-w-[550px]">
            Never default on your bills with paywave’s easy access to utility
            bill payment.
          </p>

          <div className="self-center mt-20 relative">
            <div className="w-56 rounded-t-2xl overflow-hidden">
              <img
                className="w-fit object-center object-cover"
                src="/images/section/section-2/electric-bill.svg"
                alt="paywave app on phone"
                loading="lazy"
              />
            </div>

            <div className="rounded-lg overflow-hidden w-32 absolute top-56 right-36">
              <img
                className="w-full"
                src="/images/section/section-2/pay-electric.svg"
                alt="pay electric bills"
              />
            </div>

            <div className="rounded-lg overflow-hidden w-40 absolute bottom-44 left-[7.5rem]">
              <img
                src="/images/section/section-2/renew-subscription.svg"
                alt="renew subscriptions"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionTwo
