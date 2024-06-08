import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { LuAlignJustify } from "react-icons/lu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
function CtaButtons() {
  const [pageTitle, setPageTitle] = useState("")

  useEffect(() => {
    setPageTitle(document.title)
  }, [])
  return (
    <div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <LuAlignJustify className="size-7" />
            <span className="sr-only">Open</span>
          </SheetTrigger>
          <SheetContent
            side="top"
            className=" inset-0 flex flex-col justify-between py-14 px-10 pb-6 md:px-6"
          >
            <div className="flex flex-col space-y-9 items-start w-full text-black font-semibold text-xl mt-10">
              <a href="">Company</a>
              <a href="">Payments</a>
              <a href="">Features</a>
              <a href="">Help</a>
            </div>

            <div className="flex flex-col space-y-6">
              <Button className="text-base text-[#002C6E] bg-white border-[#002C6E] border-2 hover:bg-[#327CEB] hover:border-[#327CEB] hover:text-white ease-in group hover:scale-105">
                <span className="relative inline-block transition-transform duration-300 group-hover:scale-105">
                  <a href="/signUp">Open an account</a>
                </span>
              </Button>
              <Button className="text-base bg-[#002C6E] hover:bg-[#327CEB] ease-in group hover:scale-105">
                <span className="relative inline-block transition-transform duration-300 group-hover:scale-105">
                  <a href="/getApp">Get the App</a>
                </span>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden lg:flex lg:space-x-4 lg:items-center lg:ml-6">
        <span className="hover:scale-105 ease-in transform transition duration-300 cursor-pointer text-base font-medium">
          <a href="/signIn">Login</a>
        </span>
        {pageTitle === "Home Page" ? (
          <Button className="text-base bg-[#327CEB] hover:bg-white hover:text-black ease-in transform transition duration-300 hover:scale-105">
            <a href="/getApp">Get the App</a>
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default CtaButtons
