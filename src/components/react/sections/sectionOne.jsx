import { Button } from "@/components/ui/button"
function SectionOne() {
  return (
    <section>
      <div className="md:flex md:flex-row mb-10 md:mb-0 px-5 sm:mx-12 h-fit">
        <div className="relative hidden md:block flex-1">
          <img
            className="absolute w-[550px] md:top-24 lg:top-20 xl:top-24 md:left-2 lg:left-8 xl:left-16 object-contain z-0"
            src="/images/section/section-1/section-1.svg"
            alt="mobile_app_image"
          />
        </div>
        <div className="flex flex-col flex-1 py-16">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold max-w-[600px]">
            Simplify your finance with Paywave.
          </h1>
          <p className="mt-12 md:text-lg lg:text-2xl max-w-[450px]">
            Manage all your transactions on one platform. instant, unified and
            simple with Paywave
          </p>
          <div className="flex justify-center sm:justify-start mt-12">
            <Button className="text-base text-[#002C6E] bg-white border-[#002C6E] border-2 hover:bg-[#327CEB] hover:border-[#327CEB] hover:text-white ease-in group hover:scale-105">
              <a
                href="/signUp"
                className="relative inline-block transition-transform duration-300 group-hover:scale-105"
              >
                Open an account
              </a>
            </Button>
            <Button className="text-base bg-[#002C6E] hover:bg-[#327CEB] ease-in ml-5 group hover:scale-105">
              <span className="relative inline-block transition-transform duration-300 group-hover:scale-105">
                <a href="/getApp">Get the app</a>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
