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
      <div className="hidden lg:flex lg:space-x-4">
        <Button className="text-base ease-in" variant="ghost">
          Login
        </Button>
        <Button className="text-base bg-[#002C6E] hover:bg-[#327CEB] ease-in">
          Get the App
        </Button>
      </div>
    </div>
  )
}

export default CtaButtons
