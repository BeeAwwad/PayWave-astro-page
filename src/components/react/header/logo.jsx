import { useState, useEffect } from "react"
function Logo() {
  const [pageTitle, setPageTitle] = useState("")

  const logoSrc =
    pageTitle === "Sign Up Page" || pageTitle === "Signin Page"
      ? "logoOne.svg"
      : "logo.svg"

  useEffect(() => {
    setPageTitle(document.title)
  }, [])

  return (
    <div>
      <span className="flex justify-center items-center">
        <img
          src={`/images/logo/${logoSrc}`}
          alt="Logo"
          width={30}
          height={30}
        />
        <a className="text-xl font-semibold ml-3 font-poppins" href="/">
          Paywave
        </a>
      </span>
    </div>
  )
}

export default Logo
