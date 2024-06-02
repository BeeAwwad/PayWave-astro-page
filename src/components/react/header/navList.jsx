import React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export function NavList() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden lg:flex space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base bg-[#002C6E]">
            Payments
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="rounded-2xl w-96 h-fit">
              <div className="bg-[#DCEAFF] p-6 min-h-32">
                <h3 className="font-semibold">Company</h3>
                <p>
                  At Paywave, our goal is to unify all your payment processes
                  online.
                </p>
              </div>
              <ul className="p-6 text-[#002C6E] font-semibold min-h-32 flex flex-col gap-3">
                <li className="mb-2">About the Company</li>
                <li className="mb-2">The Paywave Story</li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base bg-[#002C6E]">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="rounded-2xl w-96 h-fit">
              <div className="bg-[#DCEAFF] p-6 min-h-32">
                <h3 className="font-semibold">Features</h3>
                <p>
                  Having all your bill paymets in one place makes your daily
                  spending seamless.
                </p>
              </div>
              <ul className="p-6 text-[#002C6E] font-semibold min-h-32 flex flex-col gap-3">
                <li className="mb-2">Recharge Airtime</li>
                <li className="mb-2">Buy Data Bundules</li>
                <li className="mb-2">Renew TV Subscription</li>
                <li className="mb-2">Pay Electricity Bills</li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base bg-[#002C6E]">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="rounded-2xl w-96 h-fit">
              <div className="bg-[#DCEAFF] p-6 min-h-32">
                <h3 className="font-semibold">Features</h3>
                <p>
                  Having all your bill payments in one place makes your daily
                  spending seamless.
                </p>
              </div>
              <ul className="p-6 text-[#002C6E] font-semibold min-h-32 flex flex-col gap-3">
                <li className="mb-2">Scan to Pay</li>
                <li className="mb-2">Personal Savings</li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base bg-[#002C6E]">
            Help
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="rounded-2xl w-96 h-fit">
              <div className="bg-[#DCEAFF] p-6 min-h-32">
                <h3 className="font-semibold">Help</h3>
                <p>
                  Need some help or you want to share a word with us? Our doors
                  are wide open.
                </p>
              </div>
              <ul className="p-6 text-[#002C6E] font-semibold min-h-32 flex flex-col gap-3">
                <li className="mb-2">Frequently Asked Questions</li>
                <li className="mb-2">Contact Support</li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"
