import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
function SignUpForm() {
  const formContainer = useRef(null)

  useEffect(() => {
    const signUpForm = formContainer.current
    const progressBar = signUpForm.querySelector("#progressBar")
    const steps = [...signUpForm.querySelectorAll("[data-step]")]
    const circles = [...signUpForm.querySelectorAll(".circle")]
    let currentStep = steps.findIndex((step) =>
      step.classList.contains("active")
    )

    let currentCircle = circles.findIndex((circle) =>
      circle.classList.contains("active")
    )

    if (currentStep < 0 || currentCircle < 0) {
      currentStep = 0
      currentCircle = 0
      showCurrentStep()
    }

    const handleClick = (e) => {
      let incrementor
      if (e.target.closest("[data-next]")) {
        e.preventDefault()
        incrementor = 1
      } else if (e.target.closest("[data-prev]")) {
        e.preventDefault()
        incrementor = -1
      }
      if (!incrementor) return

      const inputs = [...steps[currentStep].querySelectorAll("input")]
      const allValid = inputs.every((input) => input.reportValidity())
      if (allValid) {
        currentStep += incrementor
        if (currentStep < 0) {
          currentStep = 0
        } else if (currentStep >= steps.length) {
          currentStep = steps.length - 1
        }
        showCurrentStep()
      }
    }

    const handleAnimationEnd = (e) => {
      steps[currentStep].classList.remove("hidden")
      e.target.classList.toggle(
        "hidden",
        !e.target.classList.contains("active")
      )
    }

    steps.forEach((step) => {
      step.addEventListener("animationend", handleAnimationEnd)
    })

    signUpForm.addEventListener("click", handleClick)

    return () => {
      signUpForm.removeEventListener("click", handleClick)
      steps.forEach((step) => {
        step.removeEventListener("animationend", handleAnimationEnd)
      })
    }

    function showCurrentCircle() {
      circles.forEach((circle, index) => {
        if (index <= currentStep) {
          circle.classList.add("active")
        } else {
          circle.classList.remove("active")
        }
      })

      circles.forEach((circle, index) => {
        if (index === currentStep) {
          circle.classList.add("only")
        } else {
          circle.classList.remove("only")
        }
      })

      const allActiveCircles = [
        ...circles.filter((circle) => circle.classList.contains("active")),
      ]

      progressBar.style.width = `${
        ((allActiveCircles.length - 1) / (circles.length - 1)) * 100
      }%`
    }

    function showCurrentStep() {
      showCurrentCircle()
      steps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep)
        step.classList.toggle("hidden", index !== currentStep)
      })
    }
  }, [])
  return (
    <form
      ref={formContainer}
      data-create-account
      className="overflow-hidden relative h-min"
    >
      {/* Progress bar */}
      <div className="max-w-lg mx-16 md:mx-auto mt-16 mb-20">
        <div className="progress-container relative flex justify-between items-center w-full">
          <div className="progress" id="progressBar"></div>
          <div className="circle relative bg-[#fff] flex flex-col items-center justify-center rounded-full z-10 transition-all duration-400 ease-in-out after:content-['Email'] after:block after:absolute after:mt-12 after:text-xs after:text-nowrap">
            {/* Email */}
          </div>
          <div className="circle relative bg-[#fff] flex items-center justify-center rounded-full z-10 transition-all duration-400 ease-in-out after:content-['Account_Type'] after:block after:absolute after:mt-12 after:text-xs after:text-nowrap">
            {/* Account Type */}
          </div>
          <div className="circle relative bg-[#fff] flex items-center justify-center rounded-full z-10 transition-all duration-400 ease-in-out after:content-['Password'] after:block after:absolute after:mt-12 after:text-xs after:text-nowrap">
            {/* Password */}
          </div>
          <div className="circle relative bg-[#fff] flex items-center justify-center rounded-full z-10 transition-all duration-400 ease-in-out after:content-['Authentication'] after:block after:absolute after:mt-12 after:text-xs after:text-nowrap">
            {/* Authenticaton */}
          </div>
        </div>
      </div>

      {/* Step One */}
      <Card
        className="w-full max-w-sm mx-auto border-none shadow-none card"
        data-step
      >
        <CardHeader className="mb-7">
          <CardTitle className="text-center">
            Create your Paywave account
          </CardTitle>
          <CardDescription className="text-center text-xs">
            Already have an account?
            <span className="text-[#327CEB]"> Login in</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="mb-6">
          <label className="text-sm" htmlFor="enterEmail">
            Enter your email address
          </label>
          <Input
            className="mt-3 mb-6 focus:scale-105 transition-all duration-300 ease-in-out"
            id="enterEmail"
            type="email"
            placeholder="Email"
          />
          <Button
            className="w-full bg-[#327CEB] hover:bg-[#327CEB] transition-all duration-300 ease-in-out hover:scale-105 focus:scale-105"
            data-next
          >
            Next
          </Button>
        </CardContent>
        <CardFooter className="flex-col text-center">
          <p className="text-sm mb-4">Or log in with</p>
          <div className="flex space-x-2 w-full mb-8">
            <Button className="grow bg-[#fff] hover:bg-[#fff]  border text-black transition-all duration-300 ease-in-out hover:scale-105 focus:scale-105">
              <img src="/images/sign-up/google.svg" alt="google sign-up" />
            </Button>
            <Button className="grow bg-[#fff] hover:bg-[#fff]  border text-black transition-all duration-300 ease-in-out hover:scale-105 focus:scale-105">
              <img src="/images/sign-up/apple.svg" alt="apple sign-up" />
            </Button>
          </div>
          <p className="text-xs">
            By registering, you accept our{" "}
            <a className="text-[#327CEB]" href="">
              Terms of use
            </a>{" "}
            and{" "}
            <a className="text-[#327CEB]" href="">
              Privacy Policy
            </a>
          </p>
        </CardFooter>
      </Card>
      {/* Step Two */}
      <Card
        className="w-full max-w-sm mx-auto card border-none shadow-none"
        data-step
      >
        <CardHeader className="mb-7">
          <CardTitle className="text-center mb-3">
            What kind of account would you like to open
          </CardTitle>
          <CardDescription className="text-center text-xs">
            You can switch to either accounts later on
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-rows-1 grid-cols-2 gap-2">
            <div
              className="cursor-pointer flex flex-col items-center justify-center bg-[#DCEAFF] rounded-lg p-5 grow hover:scale-105 transition-all duration-300 ease-in-out"
              data-prev
            >
              <img
                className="size-14 mb-7"
                src="/images/sign-up/polygon-one.svg"
                alt="polygon"
              />
              <div className="text-center">
                <h3 className="mb-4 font-semibold text-xs text-nowrap">
                  Personal Account
                </h3>
                <p className="text-xs">
                  Buy airtime, data and make instant payments and save your
                  money
                </p>
              </div>
            </div>
            <div
              className="cursor-pointer flex flex-col items-center justify-center bg-[#DCEAFF] rounded-lg p-5 grow hover:scale-105 transition-all duration-300 ease-in-out"
              data-next
            >
              <img
                className="size-14 mb-7"
                src="/images/sign-up/polygon-two.svg"
                alt="polygon"
              />
              <div className="text-center">
                <h3 className="mb-4 font-semibold text-xs text-nowrap">
                  Merchant Account
                </h3>
                <p className="text-xs">
                  All the features of personal, QR pay and more savings features
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Step Three */}
      <Card
        className="w-full max-w-sm mx-auto card border-none shadow-none"
        data-step
      >
        <CardHeader className="mb-7">
          <CardTitle className="text-center mb-3">Set a Password</CardTitle>
          <CardDescription className="text-center text-xs">
            Your password must be 8 characters long and must include a special
            character
          </CardDescription>
        </CardHeader>
        <CardContent>
          <label className="text-sm" htmlFor="passwordOne">
            Enter Password
          </label>
          <Input
            className="mt-3 mb-6 focus:scale-105 transition-all duration-300 ease-in-out"
            id="passwordOne"
            type="password"
            placeholder="Enter password"
          />
          <label className="text-sm" htmlFor="passwordTwo">
            {" "}
            Re-enter password
          </label>
          <Input
            className="mt-3 mb-6 focus:scale-105 transition-all duration-300 ease-in-out"
            id="passwordTwo"
            type="password"
            placeholder="Enter password again"
          />
          <Button
            className="w-full bg-[#327CEB] hover:bg-[#327CEB] transition-all duration-300 ease-in-out hover:scale-105 focus:scale-105"
            data-next
          >
            Next
          </Button>
        </CardContent>
      </Card>
      {/* Step Four */}
      <Card
        className="w-full max-w-sm mx-auto card border-none shadow-none"
        data-step
      >
        <CardHeader className="mb-7">
          <CardTitle className="text-center mb-3">
            Verify your phone Number
          </CardTitle>
          <CardDescription className="text-center text-xs">
            This is the number you will use for cellular transactions
          </CardDescription>
        </CardHeader>
        <CardContent className="mb-4">
          <label className="text-sm" htmlFor="phoneNumber">
            Enter your Phone Number
          </label>
          <div className="relative mt-3 mb-6">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black text-sm pointer-events-none z-50">
              +234
            </span>
            <Input
              className="pl-14 focus:scale-105 transition-all duration-300 ease-in-out"
              id="phoneNumber"
              type="number"
              placeholder="912 345 678"
            />
          </div>
          <Button
            className="w-full bg-[#327CEB] hover:bg-[#327CEB] transition-all duration-300 ease-in-out hover:scale-105 focus:scale-105"
            data-next
          >
            Send Verification Code
          </Button>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-center text-xs text-[#327CEB]">
            Verify with my email
          </p>
        </CardFooter>
      </Card>
    </form>
  )
}

export default SignUpForm
