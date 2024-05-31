import { Button } from "@/components/ui/button"

function NewsLetter() {
  return (
    <div className="bg-[#327CEB] text-white p-5 md:p-10 md:pb-20 mx-8 md:mx-24 lg:mx-44 xl:mx-60 rounded-lg md:rounded-2xl font-poppins flex flex-col md:flex-row justify-between gap-10 md:gap-5">
      <div>
        <img src="/images/footer/mail.svg" alt="mail icon" />
        <h2 className=" font-medium text-2xl sm:text-4xl mt-5">
          Let's keep in touch
        </h2>
        <p className="mt-3 max-w-sm text-sm">
          Join our newletter and stay up to date on paywave, finance and
          technology.
        </p>
      </div>
      <div className="md;flex md:flex-col md:items-end md:mt-auto">
        <div className="flex justify-center md:justify-end mt-auto">
          <input
            className="text-[#002C6E] mr-3 px-5 py-2 rounded-3xl w-full outline-none placeholder:text-[#002C6E] placeholder:text-xs"
            type="email"
            placeholder="Enter your email"
          />
          <Button className={"bg-[#002C6E] text-white rounded-3xl text-sm"}>
            Subscribe
          </Button>
        </div>
        <p className="text-xs mt-4">
          By subscribing, you agree with our{" "}
          <span className="text-[#002C6E]">Privacy Policy</span>
        </p>
      </div>
    </div>
  )
}

export default NewsLetter
