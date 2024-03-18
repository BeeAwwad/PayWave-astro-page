function SubHeader({ children, header, paragraph }) {
  return (
    <div className="flex flex-col items-center mt-20 text-center p-6 font-poppins">
      <span className="text-[#327CEB] text-base lg:text-lg font-semibold">
        {children}
      </span>
      <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-semibold">
        {header}
      </h2>
      <p className="mt-3 text-base lg:text-lg">{paragraph}</p>
    </div>
  )
}

export default SubHeader
