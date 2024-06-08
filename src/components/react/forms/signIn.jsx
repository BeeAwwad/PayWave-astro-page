import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function SignInForm() {
  return (
    <form className="mt-10">
      <Card
        className="w-full max-w-lg mx-auto border-none shadow-none"
        data-step
      >
        <CardHeader className="mb-7">
          <CardTitle className="text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center text-xs mb-5">
            New to Paywave?
            <a
              className="text-[#327CEB] hover:scale-110 transition-all duration-300 ease-in-out"
              href="/signUp"
            >
              {" "}
              Sign up
            </a>
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
          <label className="text-sm" htmlFor="passwordOne">
            Enter Password
          </label>
          <Input
            className="mt-3 mb-2 focus:scale-105 transition-all duration-300 ease-in-out"
            id="passwordOne"
            type="password"
            placeholder="Enter password"
          />
          <a className="text-[#327CEB] text-xs" href="#">
            Reset password
          </a>
          <Button
            className="w-full bg-[#327CEB] hover:bg-[#327CEB] transition-all duration-300 ease-in-out hover:scale-105 focus:scale-105 mt-4"
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
        </CardFooter>
      </Card>
    </form>
  )
}

export default SignInForm
