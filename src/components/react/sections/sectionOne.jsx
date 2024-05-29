import { Button } from "@/components/ui/button"
function SectionOne() {
  return (
    <section>
      <div className="md:flex md:flex-row mb-10 md:mb-0 mx-12 h-fit font-poppins">
        <div className="hidden md:block flex-1">
          <img
            className="w-full h-full object-contain"
            src="/images/section/section-1/section-1.png"
            alt="mobile_app_image"
          />
        </div>
        <div className="flex flex-col flex-1 py-16">
          <h1 className="text-5xl lg:text-6xl font-semibold xl:text-7xl max-w-[600px]">
            Simplify your finance with Paywave.
          </h1>
          <p className="mt-12 md:text-lg lg:text-2xl max-w-[450px]">
            Manage all your transactions on one platform. instant, unified and
            simple with Paywave
          </p>
          <div className="flex mt-12">
            <Button className="text-base text-[#002C6E] bg-white border-[#002C6E] border-2 hover:bg-[#327CEB] hover:border-[#327CEB] hover:text-white ease-in">
              Open an account
            </Button>
            <Button className="text-base bg-[#002C6E] hover:bg-[#327CEB] ease-in ml-5">
              Get the app
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
