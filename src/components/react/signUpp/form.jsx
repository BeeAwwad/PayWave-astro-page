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
      <Card className="w-full max-w-xs mx-auto card" data-step>
        <CardHeader>
          <CardTitle>Create your Paywave account</CardTitle>
          <CardDescription>
            Already have an account?<span>Login in</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <label htmlFor="enterEmail">Enter your email address</label>
          <Input
            id="enterEmail"
            type="email"
            placeholder="Enter your email address"
          />
          <Button data-next>Next</Button>
        </CardContent>
        <CardFooter className="flex-col text-center">
          <p>Or log in with</p>
          <div>
            <Button>Google</Button>
            <Button>Apple</Button>
          </div>
          <p>
            By registering, you accept our <a href="">Terms of use</a> and{" "}
            <a href="">Privacy Policy</a>
          </p>
        </CardFooter>
      </Card>
      {/* Step Two */}
      <Card className="w-full max-w-xs mx-auto card" data-step>
        <CardHeader>
          <CardTitle>What kind of account would you like to open</CardTitle>
          <CardDescription>
            You can switch to either accounts later on
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-rows-1 grid-cols-2">
            <div className="cursor-pointer" data-prev>
              <img src="" alt="" />
              <div>
                <h3>Personal Account</h3>
                <p>
                  Buy airtime, data and make instant payments and save your
                  money
                </p>
              </div>
            </div>
            <div className="cursor-pointer" data-next>
              <img src="" alt="" />
              <div>
                <h3>Merchant Account</h3>
                <p>
                  All the features of personal, QR pay and more savings features
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Step Three */}
      <Card className="w-full max-w-xs mx-auto card" data-step>
        <CardHeader>
          <CardTitle>Set a Password</CardTitle>
          <CardDescription>
            Your password must be 8 characters long and must include a special
            character
          </CardDescription>
        </CardHeader>
        <CardContent>
          <label htmlFor="passwordOne">Enter Password</label>
          <Input
            id="passwordOne"
            type="password"
            placeholder="Enter password"
          />
          <label htmlFor="passwordTwo"> Re-enter password</label>
          <Input
            id="passwordTwo"
            type="password"
            placeholder="Enter password again"
          />
          <Button data-next>Next</Button>
        </CardContent>
      </Card>
      {/* Step Four */}
      <Card className="w-full max-w-xs mx-auto card" data-step>
        <CardHeader>
          <CardTitle>Verify your phone Number</CardTitle>
          <CardDescription>
            This is the number you will use for cellular transactions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <label htmlFor="phoneNumber">Enter your Phone Number</label>
          <Input id="phoneNumber" type="number" placeholder="912 345 678" />
          <Button className="" data-next>
            Next
          </Button>
        </CardContent>
        <CardFooter>
          <p>Verify with my email</p>
        </CardFooter>
      </Card>
    </form>
  )
}

export default SignUpForm
