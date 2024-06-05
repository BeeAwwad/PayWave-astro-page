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
  console.log("🚀 ~ SignUpForm ~ formContainer:", formContainer)

  useEffect(() => {
    const signUpForm = formContainer.current
    const steps = [...signUpForm.querySelectorAll("[data-step]")]
    console.log("🚀 ~ useEffect ~ steps:", steps)
  }, [])
  return (
    <form ref={formContainer} data-create-account>
      {/* Step One */}
      <Card className="w-full max-w-xs mx-auto card active" data-step>
        <CardHeader>
          <CardTitle>Create your Paywave account</CardTitle>
          <CardDescription>
            Already have an account?<span>Login in</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <label htmlFor="email">Enter your email address</label>
          <Input
            name="email"
            type="email"
            placeholder="Enter your email address"
          />
          <Button>Next</Button>
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
            <div>
              <img src="" alt="" />
              <div>
                <h3>Personal Account</h3>
                <p>
                  Buy airtime, data and make instant payments and save your
                  money
                </p>
              </div>
            </div>
            <div>
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
            name="passwordOne"
            type="password"
            placeholder="Enter password"
          />
          <label htmlFor="passwordTwo"> Re-enter password</label>
          <Input
            name="passwordTwo"
            type="password"
            placeholder="Enter password again"
          />
          <Button>Next</Button>
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
          <label htmlFor="number">Enter your Phone Number</label>
          <Input name="number" type="number" placeholder="912 345 678" />
          <Button>Next</Button>
        </CardContent>
        <CardFooter>
          <p>Verify with my email</p>
        </CardFooter>
      </Card>
    </form>
  )
}

export default SignUpForm
