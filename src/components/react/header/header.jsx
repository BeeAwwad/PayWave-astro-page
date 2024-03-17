import CtaButtons from "./ctaButtons"
import Logo from "./logo"
import { NavList } from "./navList"

function HeaderComponent() {
  return (
    <header className="flex justify-between items-center px-10 lg:px-32 font-poppins shadow-md h-16">
      <Logo />
      <NavList />
      <CtaButtons />
    </header>
  )
}

export default HeaderComponent
