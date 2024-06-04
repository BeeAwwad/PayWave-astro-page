import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
function ContentGetApp() {
  return (
    <div className="h-full font-poppins bg-[url('/images/get-app/background-small.svg')] md:bg-[url('/images/get-app/background.svg')] bg-no-repeat sm:bg-cover bg-center bg-fixed flex items-center justify-center md:items-start">
      <div className="flex flex-col items-center justify-center py-12 px-9 h-fit text-center">
        <h1 className="text-5xl md:text-6xl font-bold md:font-extrabold text-[#002c6e] mb-5 mt-14 md:mt-5">
          Get The Paywave App
        </h1>
        <p className="text-xl font-medium mb-5">
          Scan the qr code the download the mobile app
        </p>
        <img
          className="size-[200px] mx-auto mb-6"
          src="/images/get-app/qr-code.svg"
          alt="Qr Code"
        />
        <p className="text-xl font-medium mb-5">
          or get a download link via SMS or email
        </p>
        <div className="flex justify-center space-x-3 w-full">
          <input
            type="text"
            placeholder="Enter your email or phone number"
            className="w-2/4 px-4 py-2 bg-[#DCEAFF] rounded-full focus:outline-none ease-in focus:scale-105 placeholder:text-[#002C6E]"
          />
          <Button className="bg-[#002C6E] text-white hover:bg-[#327CEB] ease-in group focus:scale-105  hover:scale-105 rounded-full p-4 size-12">
            <ArrowRight className="size-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ContentGetApp
