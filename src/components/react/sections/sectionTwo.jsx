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
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-row-2">
        <div className="">
          <h2>Unified payment platform for all your finances</h2>
          <p>
            From Airtime, Data to your cable plans, paywave synergizes all your
            payment channels to one app.
          </p>
          <Button className="text-base bg-[#002C6E] hover:bg-[#327CEB] ease-in">
            Sign up now
          </Button>
        </div>
        <div>
          <p>
            Stay connect at all times when you buy Airtime and renew your Data
            Bundles on paywave.
          </p>
        </div>
        <div>
          <p>
            Never default on your bills with paywave’s easy access to utility
            bill payment.
          </p>
        </div>
      </div>
    </>
  )
}

export default SectionTwo
