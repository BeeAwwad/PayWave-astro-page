import { Button } from "@/components/ui/button"
function SectionOne() {
  return (
    <section>
      <div className="md:flex md:flex-row mb-10 md:mb-0 px-5 sm:mx-12 h-fit font-poppins">
        <div className="hidden md:block flex-1">
          <img
            className="w-full h-full object-contain"
            src="/images/section/section-1/section-1.png"
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
              <span className="relative inline-block transition-transform duration-300 group-hover:scale-105">
                Open an account
              </span>
            </Button>
            <Button className="text-base bg-[#002C6E] hover:bg-[#327CEB] ease-in ml-5 group hover:scale-105">
              <span className="relative inline-block transition-transform duration-300 group-hover:scale-105">
                Get the app
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
