import { Button } from "@/components/ui/button"
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
  return (
    <div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <LuAlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                  <a href="">Login</a>
                  <a href="">Company</a>
                  <a href="">Features</a>
                  <a href="">Support</a>
                  <a href="">Contact</a>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden lg:flex lg:space-x-4 lg:items-center lg:ml-6">
        <span className="hover:scale-105 ease-in transform transition duration-300 cursor-pointer text-base font-medium">
          Login
        </span>
        <Button className="text-base bg-[#327CEB] hover:bg-white hover:text-black ease-in transform transition duration-300 hover:scale-105">
          Get the App
        </Button>
      </div>
    </div>
  )
}

export default CtaButtons
