function SubHeader({ className, children, header, paragraph, secHeader }) {
  return (
    <div
      className={`${className} flex flex-col items-center my-20 text-center p-6 font-poppins`}
    >
      {children !== "" ? (
        <span className="text-[#327CEB] text-base lg:text-lg font-semibold">
          {children}
        </span>
      ) : null}

      {header !== "" ? (
        <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold">
          <span dangerouslySetInnerHTML={{ __html: header }} />
        </h2>
      ) : null}

      {paragraph !== "" ? (
        <p className="mt-3 text-base font-medium lg:text-lg">{paragraph}</p>
      ) : null}

      {secHeader !== "" ? (
        <p className="mt-3 font-medium text-3xl lg:text-4xl max-w-[900px]">
          {secHeader}
        </p>
      ) : null}
    </div>
  )
}

export default SubHeader
