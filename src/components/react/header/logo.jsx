function Logo() {
  return (
    <div>
      <span className="flex justify-center items-center">
        <img src="/images/logo/logo.svg" alt="Logo" width={30} height={30} />
        <a className="text-xl font-semibold ml-3 font-poppins" href="/">
          Paywave
        </a>
      </span>
    </div>
  )
}

export default Logo