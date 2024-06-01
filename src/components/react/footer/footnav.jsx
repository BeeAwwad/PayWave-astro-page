function FootNav() {
  return (
    <div className="absolute text-white font-poppins bg-[#002C6E] px-10 py-20 md:pt-28 flex justify-between rounded-t-xl h-[520px] md:h-[350px] w-full z-0 top-[250px]">
      <div className="flex flex-col md:flex-row w-1/2 h-full gap-10">
        <div className="flex h-1/2 items-center md:items-start gap-2 flex-grow flex-shrink">
          <img
            className="md:size-8"
            src="/images/footer/paywave-logo.svg"
            alt="Paywave logo"
          />
          <span className="font-semibold text-lg md:text-xl lg:text-2xl">
            Paywave
          </span>
        </div>
        <div className="flex flex-col h-1/2 flex-grow flex-shrink">
          <h3 className="font-semibold text-lg md:text-xl lg:text-2xl mb-3">
            Company
          </h3>
          <ul>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Terms of Use</li>
            <li className="mb-2">FAQ</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 w-1/2 h-full">
        <div className="flex flex-col items-end md:items-start justify-center md:justify-start h-1/2 flex-grow flex-shrink">
          <h3 className="font-semibold text-lg md:text-xl lg:text-2xl mb-3">
            Socials
          </h3>
          <ul className="flex gap-3">
            <img src="/images/footer/twitter.svg" alt="twitter" />
            <img src="/images/footer/instagram.svg" alt="instagram" />
            <img src="/images/footer/facebook.svg" alt="facebook" />
          </ul>
        </div>
        <div className="flex flex-col items-end md:items-start h-1/2 flex-grow flex-shrink">
          <h3 className="font-semibold text-lg md:text-xl lg:text-2xl mb-3">
            Need Help?
          </h3>
          <ul>
            <li>+234 812 345 6789</li>
            <li>help@paywave.com</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FootNav
